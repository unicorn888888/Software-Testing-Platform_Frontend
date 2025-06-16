export const computerSystem = ({ A, B, C }) => {
  const sides = [A, B, C].map((item) => {
    if (item !== '') {
      return isNaN(+item) ? item : +item
    }
  })

  let result = ''
  let totalSales = -1
  let actualCommission = -1
  if (!sides.every((item) => typeof item === 'number')) return 'error'

  if (
    sides[0] > 0 &&
    sides[0] <= 70 &&
    sides[1] > 0 &&
    sides[1] <= 80 &&
    sides[2] > 0 &&
    sides[2] <= 90
  ) {
    totalSales = sides[0] * 25 + sides[1] * 30 + sides[2] * 45
    if (totalSales <= 1000) {
      actualCommission = totalSales * 0.1
    } else if (totalSales <= 1800) {
      actualCommission = totalSales * 0.15
    } else {
      actualCommission = totalSales * 0.2
    }
    result = '输入有效'
  } else result = '输入无效'

  return { result: result, totalSales: totalSales, actualCommission: actualCommission }
}
