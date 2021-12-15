export function spaceFormattedNumber(nr) {
  return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}