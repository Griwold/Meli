const convertPrice = (currency: string) => Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0
});

export default convertPrice;