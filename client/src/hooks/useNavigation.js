import { useState } from "react";

export default function useNavigation() {
  const [activePage, setActivePage] = useState("Home");

  // Função para mudar de página
  const navigateTo = (pageName) => {
    setActivePage(pageName);
    window.scrollTo(0, 0);
  };

  return {
    activePage,
    navigateTo,
  };
}
