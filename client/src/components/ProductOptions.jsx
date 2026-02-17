import { useState } from "react";

export default function ProductOptions({ options, shape, type, radius }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex gap-2">
      {options.map((option, index) => {
        const shapeStyles =
          shape === "circle"
            ? "w-[31px] h-[31px] rounded-full"
            : `h-[46px] min-w-[46px] px-4 rounded-[${radius}]`;

        return (
          <button
            key={index}
            onClick={() => setSelected(option)}
            style={type === "color" ? { backgroundColor: option } : {}}
            className={`flex items-center justify-center border transition-all ${shapeStyles} ${
              selected === option
                ? "border-2 border-[#FFB31F]"
                : "border-light-gray-2"
            }`}
          >
            {type === "text" && (
              <span className="font-bold text-sm text-dark-gray-2">
                {option}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
