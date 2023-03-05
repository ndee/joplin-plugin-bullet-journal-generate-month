export function generateMonth(month?: number, year?: number) {
    let mdString = "";
    month = month ?? (new Date()).getMonth();
    year = year ?? (new Date()).getFullYear();

    const monthName = (new Date(year, month)).toLocaleString(
        "DE-de", { month: 'long', }
    )
    const days = daysInMonth(month, year);

    mdString += `
# 🎯 Ziele - ${monthName}
- [ ] ⭐️
- [ ] ⭐️
- [ ] ⭐️ 
`;

    for (let d = 0; d < days; d++) {
        const day = d + 1;
        const weekDay = (new Date(year, month, day)).toLocaleString(
            "DE-de", { weekday: 'long', }
        )
        mdString += `
#### ${day}. ${weekDay}
        `
    }

    return mdString;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}