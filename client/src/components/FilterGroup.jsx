export default function FilterGroup({ title, options, inputType }) {
  return (
    <div className="mb-8">
      {/* 1. Renderizamos o título que recebemos via prop */}
      <h4 className="text-sm font-bold text-dark-gray-2 mb-4">{title}</h4>

      <div className="flex flex-col gap-3">
        {/* 2. Aqui acontece a mágica: percorremos o array 'options' */}
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type={inputType} // Define se é 'checkbox' ou 'radio'
              name={title}
              id={`${title}-${index}`} // ID único para o label funcionar
              className="w-[22px] h-[22px] accent-primary cursor-pointer"
            />
            {/* 3. Mostramos o texto da opção */}
            <label
              htmlFor={`${title}-${index}`}
              className="text-sm text-dark-gray-2 cursor-pointer"
            >
              {option.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
