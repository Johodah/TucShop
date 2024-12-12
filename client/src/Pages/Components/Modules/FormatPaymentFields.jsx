export const FormatPaymentField = (name, value) => {
  const formatters = {
    accountHolderName: (v) => v.replace(/[^A-Za-z\s]/g, ""),
    cardNumber: (v) => v.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1-").slice(0, 19),
    expirationDate: (v) => {
      let formatted = v.replace(/\D/g, "").slice(0, 4);

      if (formatted.length > 2) {
        formatted = formatted.slice(0, 2) + "/" + formatted.slice(2);
      }

      const month = parseInt(formatted.slice(0, 2), 10);
      if (month > 12) {
        formatted = "12" + formatted.slice(2);
      }

      return formatted;
    },
    cvv: (v) => v.replace(/\D/g, "").slice(0, 3),
  };

  return formatters[name] ? formatters[name](value) : value;
};
