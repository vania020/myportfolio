export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Vania Pachas</p>
      </div>
    </footer>
  );
}
