export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-grid">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-16">
        <p className="text-sm font-semibold uppercase text-coral">{eyebrow}</p>
        <h1 className="mt-3 text-5xl md:text-6xl">
          <span className="highlight">{title}</span>
        </h1>
        {subtitle && <p className="mt-5 max-w-xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
