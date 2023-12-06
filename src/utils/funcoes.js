export const formatarPreco = (valor) => {
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
