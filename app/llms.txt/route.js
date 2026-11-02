import { SITE_URL, faqs, services, site } from "../lib/site";

/* Built once at build time from app/lib/site.js, so it never drifts from the site */
export const dynamic = "force-static";

export function GET() {
  const a = site.address;
  const body = `# ${site.name}

> ${site.name} is a digital growth studio in ${a.street}, ${a.locality}, ${a.countryName}, founded in ${site.foundingYear}. One team designs and builds websites, web apps, mobile apps and SaaS products, then grows them with SEO, content and paid ads on Meta and Google, for clients in Bangladesh and 8+ countries.

## Services

${services.map((s) => `- ${s.name}: ${s.description}`).join("\n")}

## How we work

Projects move through four stages: discover, design, build and grow. Clients see progress every week. We reply to new enquiries within 24 hours with a plan, scope and quote.

## Key facts

- Founded: ${site.foundingYear}
- Location: ${a.street}, ${a.locality} ${a.postalCode}, ${a.countryName}
- Clients: 30+ clients in 8+ countries, 50+ projects delivered
- Team: 15+ specialists across strategy, design, engineering and marketing

## Frequently asked questions

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Contact

- Website: ${SITE_URL}
- Email: ${site.email}
- Phone: ${site.phoneDisplay} (${site.phoneIntl})
- Start a project: ${SITE_URL}/#contact

## Pages

- [Home](${SITE_URL}/): services, selected work, client stories and FAQ
- [Services](${SITE_URL}/#services)
- [Selected work](${SITE_URL}/#portfolio)
- [FAQ](${SITE_URL}/#faq)
- [Privacy policy](${SITE_URL}/privacy-policy)
- [Terms of service](${SITE_URL}/terms-of-service)
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
