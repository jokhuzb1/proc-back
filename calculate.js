
// Calculate initial amount and divided per month


export const calculate = (amount, period) => {
  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay() + 7;
  const monthlyPayment = Math.round(amount / period);


  const result = Array.from({ length: period }, (_, index) => {

    const currentYear = month + index > 12 ? year + 1 : year;
    const newPay = {
      year: currentYear,
      month: month + index,
      day,
      credit: monthlyPayment,
      paidAmount: 0,
      isPaymentComplete: false
    }
    return newPay
  });

  const updated = result.reduce((acc, item, index) => {
    if (day < 10) return [...acc, item];
    if (index === 0) {
      return [...acc, { ...item, credit: item.credit / 2 }]
    }
    if (index === result.length - 1) {
      return [...acc, item,
      { ...item, month: item.month + 1, credit: item.credit / 2 }]
    }
    return [...acc, item]
  }, [])
  return updated;
}