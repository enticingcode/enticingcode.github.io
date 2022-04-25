function unixTimeConversion(unixTime) {
    let shortenedTime;
    let milliseconds = unixTime * 1000;
    let dateObj = new Date(milliseconds)
    let humanDateFormat = dateObj.toLocaleTimeString([], { hour: '2-digit', hour12: true });

    if (humanDateFormat[0] == 0) {
        shortenedTime = humanDateFormat.substring(1);
    }

    console.log(shortenedTime);
    return shortenedTime;

}



export { unixTimeConversion };