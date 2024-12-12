export const DefaultPaymentDetails = {
    accountHolderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  };
  
  export const DefaultState = {
    clicked: null,
    showConfirm: false,
    purchaseCompleted: false,
    showPaymentForm: false,
    showPayButton: true,
    paymentDetails: { ...DefaultPaymentDetails },
  };
  