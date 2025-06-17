export const phoneBill = ({ A, B }) => {
  const sides = [A, B].map((item) => {
    if (item !== '') {
      return isNaN(+item) ? item : +item
    }
  })

  let result = ''
  let money = -1
  const discountRate = [0.01, 0.015, 0.02, 0.025, 0.03]
  let rate = 0

  if (!sides.every((item) => typeof item === 'number')) return 'error'

  if (sides[0] >= 0 && sides[0] <= 44640 && sides[1] >= 0 && sides[1] <= 11) {
    result = '输入有效'
    if (sides[0] <= 60) {
      if (sides[1] <= 1) {
        rate = discountRate[0]
        money = sides[0] * 0.15 * (1 - rate) + 25
        return money
      } else {
        money = sides[0] * 0.15 + 25
        return money
      }
    } else if (sides[0] <= 120) {
      if (sides[1] <= 2) {
        rate = discountRate[1]
        money = sides[0] * 0.15 * (1 - rate) + 25
        return money
      } else {
        money = sides[0] * 0.15 + 25
        return money
      }
    } else if (sides[0] <= 180) {
      if (sides[1] <= 3) {
        rate = discountRate[2]
        money = sides[0] * 0.15 * (1 - rate) + 25
        return money
      } else {
        money = sides[0] * 0.15 + 25
        return money
      }
    } else if (sides[0] <= 300) {
      if (sides[1] <= 3) {
        rate = discountRate[3]
        money = sides[0] * 0.15 * (1 - rate) + 25
        return money
      } else {
        money = sides[0] * 0.15 + 25
        return money
      }
    }
    else if (sides[0] <= 44640) {
      if (sides[1] <= 6) {
        rate = discountRate[4]
        money = sides[0] * 0.15 * (1 - rate) + 25
        return money
      } else {
        money = sides[0] * 0.15 + 25
        return money
      }
    }
  } else {
    return '超过范围'
  }

  return money
}
