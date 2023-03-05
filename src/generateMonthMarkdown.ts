export function generateMonth(year?: number, month?: number) {
    const maxGoals = 3;
    let mdString = "";
    month = (month ?? (new Date()).getMonth()) - 1
    year = year ?? (new Date()).getFullYear();

    const monthName = (new Date(year, month)).toLocaleString(
        "DE-de", { month: 'long', }
    )
    const days = daysInMonth(month, year);

    mdString += `# 🎯 Ziele - ${monthName}\n`;
    for (let g = 0; g < maxGoals; g++) {
        mdString += `- [ ] ⭐️\n`;
    }


    mdString += `\n# ${getWeekIcon(1)} Woche 1\n`
    for (let d = 0; d < days; d++) {
        const day = d + 1;
        const weekDay = (new Date(year, month, day)).toLocaleString(
            "DE-de", { weekday: 'short', }
        )
        mdString += `## ${day.toString().padStart(2, '0')}. ${weekDay}\n`
        if (weekDay === "So") {
            mdString += `\n# ${getWeekIcon(day)} Woche ${(Math.round(day / 7) + 1)}\n`
        }
    }

    mdString += `\n# 👀 Review\n`;

    return mdString;
}

function getWeekIcon(day: number) {
    switch (Math.round(day / 7)) {
        case 0:
            return `🌑`;
        case 1:
            return `🌒`;
        case 2:
            return `🌓`;
        case 3:
            return `🌔`;
        case 4:
            return `🌕`;

        default:
            return `🌕`;
    }
}

function daysInMonth(month, year) {
    return new Date(year, month - 1, 0).getDate();
}