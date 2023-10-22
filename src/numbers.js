export function formatNumber(num) {
  const roundedNum = Math.round(num); // Округляем число до ближайшего целого
  if (roundedNum < 10000) return roundedNum.toString();
  const result = roundedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return result
}