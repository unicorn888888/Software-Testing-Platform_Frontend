// A :年销售额， B：现金到账率 ，C：请假天数

export const sales = (input) => {
  const A=input["V"];
  const B=input["R"];
  const C=input["D"];

  const sides = [A, B, C].map((item) => {
    if (item !== '') {
      return isNaN(+item) ? item : +item
    }
  })
  if (!sides.every((item) => typeof item === 'number')) return "不合法数据"
  let money = sides[0]
  if (sides[0] >= 0 && sides[1] > 0 && sides[2] > 0 && sides[2] <= 366 && sides[1] <= 1) {
    if (sides[0] > 200 && sides[2] <= 10 && sides[1] >= 0.6) {
      money = (money / 7)
      return money
    } else if (sides[1] < 0.6) {
      money = 0
      return money
    } else if (sides[1] <= 0.85) {
      money = (money / 6)
      return money
    } else {
      money = (money / 5)
      return money
    }
  } else {
    return "不合法数据"
  }
}
