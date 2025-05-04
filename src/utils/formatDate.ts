const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "short",
})
function formatDate(date: Date) {
    return formatter.format(date);
}

export {formatDate};