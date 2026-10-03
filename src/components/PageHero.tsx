interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  desc: string;
}

export default function PageHero({ eyebrow, title, highlight, desc }: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="page-hero-eyebrow">{eyebrow}</div>
      <h1 className="page-hero-title">
        {title} {highlight && <span>{highlight}</span>}
      </h1>
      <p className="page-hero-desc">{desc}</p>
    </div>
  );
}
