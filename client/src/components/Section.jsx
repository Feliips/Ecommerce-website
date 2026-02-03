export default function Section({
  title,
  titleAlign = "left",
  link,
  children,
}) {
  return (
    <section className="mb-12">
      {/* Container do Título e Link */}
      <div
        className={`flex justify-between items-end mb-6 ${titleAlign === "center" ? "flex-col !items-center" : ""}`}
      >
        <h2 className="text-dark-gray-2 text-2xl font-bold">{title}</h2>

        {/* Só renderiza o link se ele existir nas props */}
        {link && (
          <a
            href={link.href}
            className="text-primary text-lg hover:underline transition-all"
          >
            {link.text}
          </a>
        )}
      </div>

      {/* O "recheio" da seção */}
      <div className="w-full">{children}</div>
    </section>
  );
}
