"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

/*
 * Animated isometric "growth platform" for the hero.
 * World units are projected with a standard 30° isometric projection:
 * +x runs to the screen's lower right, +y to the lower left, +z up.
 */

const S = 25; // pixels per world unit
const C = Math.cos(Math.PI / 6);
const OX = 300; // screen position of world origin
const OY = 92;
const VIEW_W = 600;
const VIEW_H = 450;

const P = (x, y, z = 0) => [OX + (x - y) * C * S, OY + (x + y) * 0.5 * S - z * S];
const pts = (...ps) => ps.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join(" ");
const path = (...ps) => "M" + ps.map(([x, y]) => P(x, y, 0).map((n) => n.toFixed(1)).join(" ")).join(" L");

function faces(x, y, z, w, d, h) {
  return {
    top: pts(P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)),
    left: pts(P(x, y + d, z), P(x + w, y + d, z), P(x + w, y + d, z + h), P(x, y + d, z + h)),
    right: pts(P(x + w, y, z), P(x + w, y + d, z), P(x + w, y + d, z + h), P(x + w, y, z + h)),
  };
}

/* Map 2D drawing coordinates (in world units) onto isometric surfaces */
const onTop = (x, y, z) => {
  const [sx, sy] = P(x, y, z);
  return `matrix(${C * S} ${0.5 * S} ${-C * S} ${0.5 * S} ${sx} ${sy})`;
};
/* Upright face looking toward +y (screen left): u runs along +x, v runs down */
const onFaceY = (x, y, z) => {
  const [sx, sy] = P(x, y, z);
  return `matrix(${C * S} ${0.5 * S} 0 ${S} ${sx} ${sy})`;
};
/* Upright face looking toward +x (screen right): u runs along -y, v runs down */
const onFaceX = (x, y, z) => {
  const [sx, sy] = P(x, y, z);
  return `matrix(${C * S} ${-0.5 * S} 0 ${S} ${sx} ${sy})`;
};

const TONES = {
  glass: { top: "url(#isoGlassTop)", left: "#D8CEFF", right: "#B9A9FF" },
  white: { top: "#FFFFFF", left: "#E6E0FF", right: "#CDC2FF" },
  brand: { top: "#8C78FF", left: "#6045FF", right: "#4A2FE6" },
  ink: { top: "#3A22C2", left: "#1A1259", right: "#0E0A2E" },
};

function Box({ x, y, z = 0, w, d, h, tone = "white" }) {
  const f = faces(x, y, z, w, d, h);
  const t = TONES[tone];
  return (
    <g>
      <polygon points={f.left} fill={t.left} />
      <polygon points={f.right} fill={t.right} />
      <polygon points={f.top} fill={t.top} stroke="rgba(255,255,255,0.75)" strokeWidth="0.8" strokeLinejoin="round" />
    </g>
  );
}

/* Gentle up-and-down drift in screen space */
function Float({ children, amount = 6, duration = 6, delay = 0, reduce }) {
  if (reduce) return <g>{children}</g>;
  return (
    <motion.g
      animate={{ y: [0, -amount, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.g>
  );
}

/* SMIL helper: skipped entirely when the visitor prefers reduced motion */
function Anim({ reduce, ...props }) {
  if (reduce) return null;
  return <animate repeatCount="indefinite" {...props} />;
}

function GrowBar({ x, y, w, d, min, max, duration, delay, reduce }) {
  const h = useMotionValue(reduce ? max : min);
  useEffect(() => {
    if (reduce) return undefined;
    const controls = animate(h, [min, max], {
      duration,
      delay,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    });
    return () => controls.stop();
  }, [h, min, max, duration, delay, reduce]);
  const top = useTransform(h, (v) => faces(x, y, 0, w, d, v).top);
  const left = useTransform(h, (v) => faces(x, y, 0, w, d, v).left);
  const right = useTransform(h, (v) => faces(x, y, 0, w, d, v).right);
  return (
    <g>
      <motion.polygon points={left} fill="url(#isoBarLeft)" />
      <motion.polygon points={right} fill="url(#isoBarRight)" />
      <motion.polygon points={top} fill="#C9BDFF" stroke="rgba(255,255,255,0.85)" strokeWidth="0.8" />
    </g>
  );
}

/* Glowing packet travelling along a floor trace */
function Packet({ d, dur, begin, reduce }) {
  if (reduce) return null;
  return (
    <circle r="3.4" fill="#6045FF" stroke="#FFFFFF" strokeWidth="1.2" filter="url(#isoGlow)" opacity="0">
      <animateMotion path={d} dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" />
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.1;0.85;1"
        dur={`${dur}s`}
        begin={`${begin}s`}
        repeatCount="indefinite"
      />
    </circle>
  );
}

/* Expanding ring on the floor under a module */
function Pulse({ x, y, reduce, begin = 0 }) {
  return (
    <g transform={onTop(x, y, 0.01)}>
      <circle r="0.55" fill="none" stroke="#6045FF" strokeWidth="0.06" opacity={reduce ? 0.5 : 0}>
        <Anim reduce={reduce} attributeName="r" values="0.4;1.5" dur="2.6s" begin={`${begin}s`} />
        <Anim reduce={reduce} attributeName="opacity" values="0.8;0" dur="2.6s" begin={`${begin}s`} />
      </circle>
    </g>
  );
}

/* Isometric coin (cylinder) */
function Coin({ cx, cy, z, r = 0.9, h = 0.32 }) {
  const [tx, ty] = P(cx, cy, z + h);
  const [, by] = P(cx, cy, z);
  const rx = r * S * Math.SQRT2 * C;
  const ry = r * S * Math.SQRT2 * 0.5;
  return (
    <g>
      <ellipse cx={tx} cy={by} rx={rx} ry={ry} fill="#4A2FE6" />
      <rect x={tx - rx} y={ty} width={rx * 2} height={by - ty} fill="url(#isoCoinSide)" />
      <ellipse cx={tx} cy={ty} rx={rx} ry={ry} fill="#9B85FF" stroke="rgba(255,255,255,0.8)" strokeWidth="0.8" />
      <ellipse cx={tx} cy={ty} rx={rx * 0.62} ry={ry * 0.62} fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
    </g>
  );
}

export default function IsoScene({ className = "" }) {
  const reduce = useReducedMotion();

  /* Floor traces connecting each module to the central tower */
  const traces = [
    path([4.2, 2.2], [4.2, 3.6], [6.5, 3.6], [6.5, 4.9]),
    path([1.8, 6.9], [4.9, 6.9]),
    path([9.3, 3.3], [9.3, 6.5], [8.1, 6.5]),
    path([4.9, 9.6], [6.2, 9.6], [6.2, 8.1]),
    path([9.6, 9.2], [9.6, 8.4], [7.6, 8.4], [7.6, 8.1]),
  ];

  /* Orbit ring around the tower, split so the back half sits behind it */
  const R = 3.0;
  const a = R / Math.SQRT2;
  const orbitBack = `M ${-a} ${a} A ${R} ${R} 0 0 1 ${a} ${-a}`;
  const orbitFront = `M ${a} ${-a} A ${R} ${R} 0 0 1 ${-a} ${a}`;
  const orbitFull = `M ${R} 0 A ${R} ${R} 0 1 1 ${-R} 0 A ${R} ${R} 0 1 1 ${R} 0`;

  const floors = [0.5, 1.65, 2.8];

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className={className}
      role="img"
      aria-label="Animated isometric illustration: a growth platform with a website, a mobile app, a server tower carrying the Growvix mark, rising bar charts and data flowing between them"
    >
      <defs>
        <linearGradient id="isoGlassTop" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="1" stopColor="#EDE8FF" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="isoSlabTop" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.92" />
          <stop offset="1" stopColor="#ECE8FF" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id="isoBarLeft" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#8C78FF" />
          <stop offset="1" stopColor="#6045FF" />
        </linearGradient>
        <linearGradient id="isoBarRight" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#6045FF" />
          <stop offset="1" stopColor="#3A22C2" />
        </linearGradient>
        <linearGradient id="isoCoinSide" x1="0" x2="1">
          <stop offset="0" stopColor="#6045FF" />
          <stop offset="0.6" stopColor="#4A2FE6" />
          <stop offset="1" stopColor="#3A22C2" />
        </linearGradient>
        <linearGradient id="isoTile" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ECE8FF" />
          <stop offset="1" stopColor="#B9A9FF" />
        </linearGradient>
        <linearGradient id="isoPhoneCard" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#8C78FF" />
          <stop offset="1" stopColor="#4A2FE6" />
        </linearGradient>
        <filter id="isoGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="isoShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* Soft shadow under the floating platform */}
      <ellipse cx={OX} cy={OY + 12.5 * S} rx={250} ry={46} fill="#3A22C2" opacity="0.22" filter="url(#isoShadow)" />

      {/* ===== Platform slab ===== */}
      <Float amount={4} duration={7} reduce={reduce}>
        {(() => {
          const f = faces(0, 0, -0.7, 12, 12, 0.7);
          return (
            <g>
              <polygon points={f.left} fill="#7A63FF" />
              <polygon points={f.right} fill="#6045FF" />
              <polygon points={f.top} fill="url(#isoSlabTop)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" />
            </g>
          );
        })()}

        {/* Floor grid */}
        <g transform={onTop(0, 0, 0)} stroke="rgba(96,69,255,0.14)" strokeWidth="0.025">
          {Array.from({ length: 11 }, (_, i) => (
            <g key={i}>
              <line x1={i + 1} y1="0.15" x2={i + 1} y2="11.85" />
              <line x1="0.15" y1={i + 1} x2="11.85" y2={i + 1} />
            </g>
          ))}
        </g>

        {/* Circuit traces and travelling packets */}
        <g fill="none" stroke="rgba(96,69,255,0.38)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {traces.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        {traces.map((d, i) => (
          <Packet key={`p-${d}`} d={d} dur={2.6 + (i % 3) * 0.5} begin={i * 0.55} reduce={reduce} />
        ))}

        <Pulse x={4.2} y={2.4} reduce={reduce} />
        <Pulse x={1.7} y={6.9} reduce={reduce} begin={0.6} />
        <Pulse x={9.3} y={3.1} reduce={reduce} begin={1.2} />
        <Pulse x={9.6} y={9.2} reduce={reduce} begin={1.8} />

        {/* ===== Web: upright browser screen ===== */}
        <Box x={1.3} y={1.05} w={5.4} d={0.24} h={3.7} tone="white" />
        <g transform={onFaceY(1.3, 1.29, 3.7)}>
          <rect x="0.14" y="0.14" width="5.12" height="3.42" rx="0.16" fill="#FBFAFF" />
          <rect x="0.14" y="0.14" width="5.12" height="0.46" rx="0.16" fill="#F0EDFF" />
          <circle cx="0.42" cy="0.37" r="0.08" fill="#FF5F57" />
          <circle cx="0.66" cy="0.37" r="0.08" fill="#FEBC2E" />
          <circle cx="0.9" cy="0.37" r="0.08" fill="#28C840" />
          <rect x="1.4" y="0.25" width="2.6" height="0.24" rx="0.12" fill="#FFFFFF" />
          <rect x="0.45" y="0.92" width="2.3" height="0.26" rx="0.06" fill="#0F0E17" />
          <rect x="0.45" y="1.28" width="1.7" height="0.26" rx="0.06" fill="#6045FF">
            <Anim reduce={reduce} attributeName="width" values="0;1.7;1.7;0" keyTimes="0;0.4;0.85;1" dur="4.5s" />
          </rect>
          <rect x="0.45" y="1.7" width="2.2" height="0.11" rx="0.05" fill="#D9D1FF" />
          <rect x="0.45" y="1.9" width="1.8" height="0.11" rx="0.05" fill="#D9D1FF" />
          <rect x="0.45" y="2.2" width="1.0" height="0.34" rx="0.17" fill="#6045FF" />
          <rect x="3.0" y="0.92" width="1.95" height="1.62" rx="0.14" fill="url(#isoTile)" />
          <rect x="3.6" y="1.45" width="0.75" height="0.75" rx="0.08" fill="#FFFFFF" opacity="0.85" />
          {[0.45, 1.98, 3.51].map((ux) => (
            <rect key={ux} x={ux} y="2.8" width="1.38" height="0.55" rx="0.1" fill="#F4F2FF" />
          ))}
        </g>

        <Box x={3.3} y={1.29} w={1.8} d={0.8} h={0.16} tone="glass" />

        {/* ===== Mobile: upright phone ===== */}
        <Box x={0.85} y={5.75} w={0.26} d={2.3} h={3.9} tone="ink" />
        <g transform={onFaceX(1.11, 8.05, 3.9)}>
          <rect x="0.12" y="0.12" width="2.06" height="3.66" rx="0.28" fill="#FBFAFF" />
          <rect x="0.82" y="0.24" width="0.66" height="0.12" rx="0.06" fill="#0E0A2E" />
          <rect x="0.32" y="0.6" width="0.9" height="0.14" rx="0.07" fill="#0F0E17" />
          <rect x="0.3" y="0.95" width="1.7" height="0.95" rx="0.16" fill="url(#isoPhoneCard)" />
          <rect x="0.48" y="1.13" width="0.7" height="0.1" rx="0.05" fill="#FFFFFF" opacity="0.8" />
          <rect x="0.48" y="1.33" width="1.1" height="0.16" rx="0.08" fill="#FFFFFF" />
          <rect x="0.48" y="1.65" width="1.34" height="0.08" rx="0.04" fill="#FFFFFF" opacity="0.35" />
          <rect x="0.48" y="1.65" width="0.9" height="0.08" rx="0.04" fill="#FFFFFF">
            <Anim reduce={reduce} attributeName="width" values="0.2;1.34;1.34" keyTimes="0;0.7;1" dur="3.2s" />
          </rect>
          {[2.1, 2.55, 3.0].map((vy) => (
            <g key={vy}>
              <rect x="0.3" y={vy} width="1.7" height="0.34" rx="0.1" fill="#F0EDFF" />
              <rect x="0.4" y={vy + 0.08} width="0.18" height="0.18" rx="0.05" fill="#B9A9FF" />
              <rect x="0.68" y={vy + 0.12} width="0.8" height="0.1" rx="0.05" fill="#8A879E" />
            </g>
          ))}
          {/* Notification sliding in */}
          <g opacity={reduce ? 1 : 0}>
            <Anim reduce={reduce} attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.12;0.55;0.65;1" dur="5s" />
            {!reduce && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 -0.5;0 0;0 0;0 -0.3;0 -0.5"
                keyTimes="0;0.12;0.55;0.65;1"
                dur="5s"
                repeatCount="indefinite"
              />
            )}
            <rect x="0.2" y="0.45" width="1.9" height="0.5" rx="0.14" fill="#FFFFFF" stroke="#D9D1FF" strokeWidth="0.03" />
            <rect x="0.3" y="0.55" width="0.3" height="0.3" rx="0.08" fill="#6045FF" />
            <rect x="0.7" y="0.58" width="1.1" height="0.09" rx="0.045" fill="#0F0E17" />
            <rect x="0.7" y="0.74" width="0.8" height="0.07" rx="0.035" fill="#8A879E" />
          </g>
        </g>

        {/* ===== Growth: rising bars ===== */}
        {[
          { x: 7.7, min: 0.8, max: 1.9, duration: 2.4 },
          { x: 8.75, min: 1.2, max: 2.7, duration: 2.8 },
          { x: 9.8, min: 1.6, max: 3.4, duration: 2.2 },
          { x: 10.85, min: 2.1, max: 4.3, duration: 3.0 },
        ].map((b, i) => (
          <GrowBar
            key={b.x}
            x={b.x}
            y={1.7}
            w={0.75}
            d={0.75}
            min={b.min}
            max={b.max}
            duration={b.duration}
            delay={i * 0.25}
            reduce={reduce}
          />
        ))}

        {/* ===== SaaS: server tower with orbit ===== */}
        <g transform={onTop(6.5, 6.5, 2.2)}>
          <path d={orbitBack} fill="none" stroke="rgba(96,69,255,0.35)" strokeWidth="0.05" strokeDasharray="0.18 0.14" />
        </g>
        <Box x={5.0} y={5.0} w={3.0} d={3.0} h={0.36} tone="glass" />
        {floors.map((z, i) => (
          <Float key={z} amount={3} duration={3.2} delay={i * 0.35} reduce={reduce}>
            <Box x={5.3} y={5.3} z={z} w={2.4} d={2.4} h={0.85} tone="brand" />
            <g transform={onFaceX(7.7, 7.7, z + 0.85)}>
              {[0.28, 0.68, 1.08].map((u, j) => (
                <rect key={u} x={u} y="0.34" width="0.3" height="0.12" rx="0.06" fill="#FFFFFF" opacity="0.9">
                  <Anim reduce={reduce} attributeName="opacity" values="0.25;1;0.25" dur="1.8s" begin={`${(i + j) * 0.3}s`} />
                </rect>
              ))}
              <rect x="1.5" y="0.36" width="0.65" height="0.08" rx="0.04" fill="#FFFFFF" opacity="0.5" />
            </g>
            <g transform={onFaceY(5.3, 7.7, z + 0.85)}>
              <rect x="0.28" y="0.36" width="1.1" height="0.08" rx="0.04" fill="#FFFFFF" opacity="0.45" />
              <circle cx="1.98" cy="0.4" r="0.09" fill="#B9A9FF">
                <Anim reduce={reduce} attributeName="fill" values="#B9A9FF;#FFFFFF;#B9A9FF" dur="2.2s" begin={`${i * 0.4}s`} />
              </circle>
            </g>
            {i === floors.length - 1 && (
              /* Growvix mark lying on the tower roof */
              <g transform={onTop(5.3, 5.3, z + 0.85)}>
                <g transform="translate(1.2 1.2) scale(0.0085) translate(-453.3 -976)">
                  <path
                    fill="#FFFFFF"
                    fillRule="evenodd"
                    d="m544.36 923.94l-42.25 23.37v3.89l42.25 24.59v52.13l-91.04 53.66-91.06-53.66v-103.98l92.85-53.92zm-89.51 51.84l45.31 26.83v-53.65l-45.73-27.24-45.74 27.24v53.65z"
                  />
                </g>
              </g>
            )}
          </Float>
        ))}
        <g transform={onTop(6.5, 6.5, 2.2)}>
          <path d={orbitFront} fill="none" stroke="rgba(96,69,255,0.6)" strokeWidth="0.05" strokeDasharray="0.18 0.14" />
          {!reduce && (
            <circle r="0.18" fill="#6045FF" stroke="#FFFFFF" strokeWidth="0.05" filter="url(#isoGlow)">
              <animateMotion path={orbitFull} dur="6s" repeatCount="indefinite" />
            </circle>
          )}
        </g>

        {/* ===== Analytics: donut tile ===== */}
        <Box x={1.6} y={8.4} w={3.2} d={2.5} h={0.32} tone="white" />
        <g transform={onTop(1.6, 8.4, 0.32)}>
          <circle cx="1.05" cy="1.25" r="0.62" fill="none" stroke="#E6E0FF" strokeWidth="0.26" />
          <circle
            cx="1.05"
            cy="1.25"
            r="0.62"
            fill="none"
            stroke="#6045FF"
            strokeWidth="0.26"
            strokeLinecap="round"
            strokeDasharray="2.6 3.9"
            transform="rotate(-90 1.05 1.25)"
          >
            <Anim reduce={reduce} attributeName="stroke-dasharray" values="0.6 3.9;3.2 3.9;0.6 3.9" dur="4s" />
          </circle>
          {[0.75, 1.15, 1.55].map((vy, i) => (
            <rect key={vy} x="2.0" y={vy} width={[0.9, 0.65, 0.8][i]} height="0.16" rx="0.08" fill={i === 0 ? "#6045FF" : "#D9D1FF"} />
          ))}
        </g>

        {/* ===== Revenue: floating coin stack ===== */}
        <Float amount={7} duration={4.2} delay={0.4} reduce={reduce}>
          <Coin cx={9.6} cy={9.2} z={0.9} />
          <Coin cx={9.6} cy={9.2} z={1.3} />
          <Coin cx={9.6} cy={9.2} z={1.7} />
        </Float>
      </Float>

      {/* ===== Floating glass cubes ===== */}
      <Float amount={10} duration={5} reduce={reduce}>
        <Box x={0.4} y={3.4} z={4.5} w={0.6} d={0.6} h={0.6} tone="glass" />
      </Float>
      <Float amount={8} duration={6.5} delay={1} reduce={reduce}>
        <Box x={10.6} y={4.6} z={4.6} w={0.5} d={0.5} h={0.5} tone="glass" />
      </Float>
      <Float amount={12} duration={5.6} delay={0.6} reduce={reduce}>
        <Box x={12.4} y={8.6} z={2.6} w={0.55} d={0.55} h={0.55} tone="brand" />
      </Float>
      <Float amount={9} duration={7} delay={1.6} reduce={reduce}>
        <Box x={-0.6} y={10.8} z={3.4} w={0.45} d={0.45} h={0.45} tone="glass" />
      </Float>
    </svg>
  );
}
