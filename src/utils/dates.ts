// logic for 1D
export const todayDate = new Date().toISOString().slice(0, 10);
const todayDateNew = new Date();
todayDateNew.setDate(todayDateNew.getDate() - 1);
export const yesterdayDate = todayDateNew.toISOString().slice(0, 10);

// logic for 1W
const curr = new Date();
export const lastday = curr.toISOString().slice(0, 10);
export const firstday = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate() - 5).toISOString().slice(0, 10);

// const curr = new Date(); // get current date
// const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
// const last = first + 6; // last day is the first day + 6
// export const firstday = new Date(curr.setDate(first)).toISOString().slice(0, 10);
// export const lastday = new Date(curr.setDate(last)).toISOString().slice(0, 10);

// logic for 1M

const dateForOneMonth = new Date();
export const LastMonthEndDate = dateForOneMonth.toISOString().slice(0, 10);
dateForOneMonth.setMonth(dateForOneMonth.getMonth() - 1);
export const LastMonthStartDate = dateForOneMonth.toISOString().slice(0, 10);

// logic for 3M
// var dateForThreeMonths = new Date();
// const endDate = dateForThreeMonths.toISOString().slice(0, 10);
// dateForThreeMonths.setMonth(dateForThreeMonths.getMonth() - 3);
// const startDate = dateForThreeMonths.toISOString().slice(0, 10);

// logic for 1Y
// const todayDateForYear = new Date().toISOString().slice(0, 10);
// const lastYearDateFromNow = new Date();
// lastYearDateFromNow.setFullYear(lastYearDateFromNow.getFullYear() - 1);
// const lastDateForYear = lastYearDateFromNow.toISOString().slice(0, 10);
