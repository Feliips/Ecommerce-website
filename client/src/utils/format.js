/**
 * Formata um número para o padrão de moeda brasileiro (BRL)
 * @param {number} value - O valor numérico a ser formatado
 * @returns {string} - O valor formatado (ex: R$ 299,90)
 */
export const formatPrice = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
