export function formatNumber(num) {
  const roundedNum = Math.round(num * 100) / 100;
  const [intPart, decimalPart] = roundedNum.toString().split('.');
  const formattedIntPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return decimalPart ? `${formattedIntPart}.${decimalPart}` : formattedIntPart;
}