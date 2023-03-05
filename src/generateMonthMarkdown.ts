export function generateMonth(year?: number, month?: number) {
    let mdString = "";
    month = (month ?? (new Date()).getMonth()) - 1
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

mdString += `\n# Woche 1\n`
    for (let d = 0; d < days; d++) {
        const day = d + 1;
        const weekDay = (new Date(year, month, day)).toLocaleString(
            "DE-de", { weekday: 'short', }
        )
        mdString += `#### ${day.toString().padStart(2, '0')}. ${weekDay}\n`
        if (weekDay === "So") {
            mdString += `\n# Woche ${(Math.round(day / 7) + 1)}\n`
        }
    }

    return mdString;
}

function daysInMonth(month, year) {
    return new Date(year, month - 1, 0).getDate();
}