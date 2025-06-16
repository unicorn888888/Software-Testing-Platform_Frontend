export const judgeTriangle = ({A,B,C})=>{
    const sides = [A,B,C].map(item =>{
        if(item !==''){
            return isNaN(+item) ? item : +item
        }
    })
    if(!sides.every(item => typeof item === 'number'))
        return 'error'
    sides.sort((a,b)=>a-b)
    console.log(sides)
    if(sides[0]<=0||sides[2]>1000)
        return '超过范围'
    if(sides[0]+sides[1]<=sides[2])
        return '不是三角形'
    if(sides[0]===sides[2])
        return '等边三角形'
    if(sides[0]===sides[1]||sides[1]===sides[2])
        return '等腰三角形'

    return '普通三角形'
}