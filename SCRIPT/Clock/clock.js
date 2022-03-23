let clockStart = setInterval(function() {
    let today = new Date()
    let dayList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    let hh = addZero(today.getHours())
    let mm = addZero(today.getMinutes())
    let ss = addZero(today.getSeconds())
    let YY = today.getFullYear()
    let MM = today.getMonth()+1
    let DD = today.getDate()
    let dd = dayList[today.getDay()].toUpperCase()
    document.getElementById('hours').innerText = hh
    document.getElementById('min').innerText = mm
    document.getElementById('sec').innerText = ss
    document.getElementById('month').innerText = MM
    document.getElementById('date').innerText = DD
    document.getElementById('year').innerText = YY
    document.getElementById('day').innerText = dd
    function addZero(num) {
    return (num < 10 ? '0'+num : ''+num)
    }
    }, 1000)
    
    
