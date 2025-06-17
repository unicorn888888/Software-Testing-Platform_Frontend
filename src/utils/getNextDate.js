function getNextDate(input) {
  const year = input["年"];
  const month = input["月"];
  const day = input["日"];

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  function isValidDate(year, month, day) {
    if (month < 1 || month > 12 || day < 1) return false;
    if (month === 2) return isLeapYear(year) ? day <= 29 : day <= 28;
    if ([4, 6, 9, 11].includes(month)) return day <= 30;
    return day <= 31;
  }

  if (year < 1900 || year > 2100 || !isValidDate(year, month, day)) {
    return '不合法日期';
  }

  if (year === 4000 && month === 12 && day === 31) {
    return '不合法日期';
  }

  const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const dateObj = new Date(dateStr);
  dateObj.setDate(dateObj.getDate() + 1);

  const nextYear = dateObj.getFullYear();
  if (nextYear > 2100) return '不合法日期';

  const nextMonth = dateObj.getMonth() + 1;
  const nextDay = dateObj.getDate();

  return `${nextYear}-${String(nextMonth)}-${String(nextDay)}`;
}

export { getNextDate }; 