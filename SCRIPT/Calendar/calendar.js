// Date 객체 생성
let date = new Date();
const prevMonth = () => {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}
const nextMonth = () => {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}
const goToday = () => {
    date = new Date();
    renderCalendar();
}

const renderCalendar = () => {
    const viewYear = date.getFullYear();
    console.log("년도표시:"+viewYear);
    const viewMonth = date.getMonth();
    console.log("월표시:"+viewMonth);
    document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;
    // 지난 달 마지막 Date, 이번 달 마지막 Date
    const prevLast = new Date(viewYear, viewMonth, 0);
    console.log(prevLast);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);
    console.log(thisLast);
    const PLDate = prevLast.getDate();
    console.log("달력 총일수:"+PLDate);
    const PLDay = prevLast.getDay();
    console.log(PLDay);
    const TLDate = thisLast.getDate();
    console.log(TLDate);
    const TLDay = thisLast.getDay();
    console.log(TLDay);
    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];

    // prevDates 
    if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift(PLDate - i);
        }
    }

    // nextDates
    for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i)
    }

    // Dates
    const dates = prevDates.concat(thisDates, nextDates);
    console.log(dates);

    // Dates
    const firstDateIndex = dates.indexOf(1);
    console.log(firstDateIndex);
    const lastDateIndex = dates.lastIndexOf(TLDate);
    console.log(lastDateIndex)
    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1 ?
            'this' :
            'other';

        dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
    })

    // Dates
    document.querySelector('.dates').innerHTML = dates.join('');

    // 오늘 날짜
    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if (+date.innerText === today.getDate()) {
                date.classList.add('today');
                break;
            }
        }
    }
}


renderCalendar();