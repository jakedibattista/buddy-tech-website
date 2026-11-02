// Describes the public company, canonical website and Puck Buddy product for crawlers.
// These identifiers use the canonical domain; pricing, ratings and private data are excluded.
export const publicStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://buddysports.app/#organization",
      name: "Buddy Tech LLC",
      url: "https://buddysports.app/",
      logo: "https://buddysports.app/pngtilted.png",
      sameAs: ["https://www.linkedin.com/company/buddy-sports-tech/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://buddysports.app/#website",
      name: "Buddy Tech",
      url: "https://buddysports.app/",
      publisher: { "@id": "https://buddysports.app/#organization" },
      about: { "@id": "https://buddysports.app/puckbuddy#application" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://buddysports.app/puckbuddy#application",
      name: "Puck Buddy",
      url: "https://buddysports.app/puckbuddy",
      applicationCategory: "SportsApplication",
      operatingSystem: "iOS, Android",
      description: "Hockey video analysis and coaching feedback for shooting, skating and goalie drills, with practice progress tracking.",
      publisher: { "@id": "https://buddysports.app/#organization" },
      sameAs: [
        "https://www.instagram.com/the_puck_buddy/",
        "https://www.youtube.com/@PuckBuddyapp",
      ],
    },
  ],
};
