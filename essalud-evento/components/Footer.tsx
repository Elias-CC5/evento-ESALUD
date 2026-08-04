export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="container-custom py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          ESS<span className="text-gold">ALUD</span> — Hospital de Emergencias Grau
        </p>
        <p className="text-xs text-muted/70">
          © 2026. Evento privado. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
