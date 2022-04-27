
function unixTimeConversion(unixTime) {
    let timeStamp;
    let milliseconds = unixTime * 1000;
    let dateObj = new Date(milliseconds)
    let humanDateFormat = dateObj.toLocaleTimeString([], { hour: '2-digit', hour12: true });

    if (humanDateFormat[0] == 0) {
        timeStamp = humanDateFormat.substring(1);
    }
    else timeStamp = humanDateFormat;
    // console.log(timeStamp);
    return timeStamp;

}

function unixDayConversion(unixTime) {
    let milliseconds = unixTime * 1000;
    let dateObj = new Date(milliseconds);
    let humanDateFormat = dateObj.toLocaleDateString([], { weekday: "short" });

    return humanDateFormat;
}



export { unixTimeConversion, unixDayConversion };