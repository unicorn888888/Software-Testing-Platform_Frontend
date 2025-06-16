export const nextDay = ({year,month,day}) =>{
    const dateNums = [year,month,day].map(item =>{
        if(item !==''){
            return isNaN(+item) ? item : +item
        }
    })
    console.log(dateNums)
    if(!dateNums.every(item => typeof item === 'number'))
        return 'error'
    const dateString = dateNums.join('-')

    const checkDate = new Date(dateString)
    if(checkDate.getFullYear() !== year || (checkDate.getMonth() + 1) !== month
        || checkDate.getDate() !== day)
        return -1

    const startDate = new Date('1900-1-1')
    const endDate = new Date('2100-12-30')
    if(checkDate<startDate||checkDate>endDate)
        return -1

    checkDate.setDate(checkDate.getDate() + 1);
    const yearNext = checkDate.getFullYear()
    const monthNext = checkDate.getMonth()+1
    const dayNext = checkDate.getDate()


    return `${yearNext}-${monthNext}-${dayNext}`



}