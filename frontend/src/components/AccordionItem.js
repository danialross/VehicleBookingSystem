import { useState } from "react";
function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <button
        className="flex items-center justify-between w-4/5 py-3 font-medium text-white border-t border-gray-200 gap-3"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`accordion-flush-body-${title}`}
      >
        <span>{title.charAt(0).toUpperCase() + title.slice(1)}</span>
        <svg
          className={`w-3 h-3 ${isOpen ? "" : "rotate-180"} shrink-0`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>

      <div
        id={`accordion-flush-body-${title}`}
        className={`${isOpen ? "block" : "hidden"} `}
        aria-labelledby={`accordion-flush-heading-${title}`}
      >
        <div className="w-full pb-2">{content}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
