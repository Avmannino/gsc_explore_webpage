const CARD_LINKS = {
  about: "#",
  hockey: "#",
  figureSkating: "#",
  schedule: "#",
  teams: "#",
  resources: "#"
};

/*
  Replace the "#" values above once you have your real links.

  Example:
  about: "https://www.greenwichskatingclub.org/about",
  hockey: "https://www.greenwichskatingclub.org/hockey",
*/

const cards = [
  {
    id: "about",
    title: "About GSC",
    href: CARD_LINKS.about,
    variant: "red",
    imageIcon: `${import.meta.env.BASE_URL}images/about-gsc.png`,
    icon: "logo"
  },
  {
    id: "hockey",
    title: "Hockey",
    href: CARD_LINKS.hockey,
    variant: "blue",
    imageIcon: `${import.meta.env.BASE_URL}images/hockey.png`,
    icon: "hockey"
  },
  {
    id: "figureSkating",
    title: "Figure Skating",
    href: CARD_LINKS.figureSkating,
    variant: "split",
    imageIcon: `${import.meta.env.BASE_URL}images/figure-skating.png`,
    icon: "skate",
    dropdown: [
      { label: "All About Figure Skating", href: "#" },
      { label: "Learn to Skate Registration", href: "#" },
      { label: "FS Class Enrollment", href: "#" },
    ]
  },
  {
    id: "schedule",
    title: "Schedule",
    href: CARD_LINKS.schedule,
    variant: "red",
    imageIcon: `${import.meta.env.BASE_URL}images/schedule.png`,
    icon: "calendar"
  },
  {
    id: "teams",
    title: "Teams",
    href: CARD_LINKS.teams,
    variant: "blue",
    imageIcon: `${import.meta.env.BASE_URL}images/teams.png`,
    icon: "teams"
  },
  {
    id: "resources",
    title: "Resources",
    href: CARD_LINKS.resources,
    variant: "split",
    imageIcon: `${import.meta.env.BASE_URL}images/resources.png`,
    icon: "logo"
  }
];

function App() {
  return (
    <main className="explore-page" style={{"--bg-image": `url(${import.meta.env.BASE_URL}images/gsc-background.jpg)`}}>
      <section className="hero-shell" aria-labelledby="page-title">
        <div className="card-grid" aria-label="Greenwich Skating Club navigation">
          {cards.map((card) => (
            <ExploreCard key={card.id} card={card} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ExploreCard({ card }) {
  const inner = (
    <>
      <span className="card-glow" aria-hidden="true" />

      <span className="icon-wrap">
        <img
          className="custom-icon"
          src={card.imageIcon}
          alt=""
          onError={(event) => {
            event.currentTarget.style.display = "none";
            const fallback = event.currentTarget.nextElementSibling;
            if (fallback) fallback.style.display = "block";
          }}
        />

        <span className="fallback-icon" aria-hidden="true">
          <Icon type={card.icon} />
        </span>
      </span>

      <span className="card-title">{card.title}</span>

      {card.dropdown && (
        <div className="card-dropdown" role="menu">
          {card.dropdown.map((item) => (
            <a key={item.label} className="card-dropdown-item" href={item.href} role="menuitem">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );

  if (card.dropdown) {
    return (
      <div className={`explore-card ${card.variant} has-dropdown`} tabIndex="0">
        {inner}
      </div>
    );
  }

  return (
    <a className={`explore-card ${card.variant}`} href={card.href}>
      {inner}
    </a>
  );
}

function Icon({ type }) {
  if (type === "hockey") return <HockeyIcon />;
  if (type === "skate") return <SkateIcon />;
  if (type === "calendar") return <CalendarIcon />;
  if (type === "teams") return <TeamsIcon />;
  return <GscLogoIcon />;
}

function GscLogoIcon() {
  return (
    <svg viewBox="0 0 120 74" role="img">
      <path
        className="icon-white"
        d="M8 30c18 2 25-6 35-21 10 11 23 14 43 14h25v38H82c-26 0-45-8-58-21C18 35 13 32 8 30Z"
      />
      <path
        className="icon-red"
        d="M50 28c8-7 18-10 31-10h27v39H82c-14 0-25-3-34-9 5 1 11 2 18 2h24V28H50Z"
      />
      <path
        className="icon-blue"
        d="M83 29h20v19H83z"
      />
      <text
        x="88"
        y="47"
        textAnchor="middle"
        className="icon-letter"
      >
        G
      </text>
    </svg>
  );
}

function HockeyIcon() {
  return (
    <svg viewBox="0 0 120 86" role="img">
      <path
        className="icon-blue-stroke"
        d="M25 15 59 50M95 15 61 50"
      />
      <path
        className="icon-red-stroke"
        d="M22 19c-4-4-4-8 0-11s7-3 11 1l31 32M98 19c4-4 4-8 0-11s-7-3-11 1L56 41"
      />
      <path
        className="icon-blue-stroke"
        d="M29 66h62"
      />
      <ellipse
        className="icon-puck"
        cx="60"
        cy="62"
        rx="13"
        ry="7"
      />
    </svg>
  );
}

function SkateIcon() {
  return (
    <svg viewBox="0 0 120 92" role="img">
      <path
        className="icon-white"
        d="M38 18h31c6 0 10 4 10 10v25h14c7 0 12 5 12 12v4H43c-17 0-28-10-28-25 0-8 4-16 10-21 4-3 8-5 13-5Z"
      />
      <path
        className="icon-red-stroke"
        d="M39 18h30c6 0 10 4 10 10v25h14c7 0 12 5 12 12v4H43c-17 0-28-10-28-25 0-8 4-16 10-21 4-3 8-5 14-5Z"
      />
      <path
        className="icon-blue-stroke"
        d="M37 28h30M40 39h30M47 18v35M57 18v35M67 20v34"
      />
      <path
        className="icon-red-stroke"
        d="M28 77h63M46 77c-4 7-12 9-22 7M77 77c5 7 14 8 24 5"
      />
      <path
        className="icon-red-stroke"
        d="M96 16c12 8 14 25 3 37"
      />
      <path
        className="icon-red-stroke"
        d="M100 4v20M90 14h20"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 110 94" role="img">
      <rect
        x="18"
        y="20"
        width="74"
        height="58"
        rx="8"
        className="icon-white"
      />
      <rect
        x="18"
        y="20"
        width="74"
        height="58"
        rx="8"
        className="icon-red-stroke"
      />
      <path
        className="icon-blue-stroke"
        d="M18 37h74"
      />
      <path
        className="icon-red-stroke"
        d="M35 12v17M75 12v17"
      />
      <g className="calendar-dots">
        <rect x="31" y="47" width="10" height="10" />
        <rect x="50" y="47" width="10" height="10" />
        <rect x="69" y="47" width="10" height="10" />
        <rect x="31" y="64" width="10" height="10" />
        <rect x="50" y="64" width="10" height="10" />
        <rect x="69" y="64" width="10" height="10" />
      </g>
      <rect x="68" y="47" width="12" height="12" className="calendar-red" />
    </svg>
  );
}

function TeamsIcon() {
  return (
    <svg viewBox="0 0 130 94" role="img">
      <circle cx="48" cy="31" r="15" className="icon-blue-fill" />
      <circle cx="66" cy="25" r="17" className="icon-blue-fill" />
      <circle cx="86" cy="33" r="14" className="icon-blue-fill" />

      <path
        className="icon-red"
        d="M27 73c2-18 13-29 29-29h18c16 0 27 11 29 29H27Z"
      />
      <path
        className="icon-blue-stroke"
        d="M27 73c2-18 13-29 29-29h18c16 0 27 11 29 29H27Z"
      />
      <path
        className="jersey-line"
        d="M45 48v25M65 44v29M85 48v25"
      />
      <text x="65" y="65" textAnchor="middle" className="team-g">
        G
      </text>
    </svg>
  );
}

export default App;