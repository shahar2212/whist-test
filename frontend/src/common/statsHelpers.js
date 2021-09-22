export function getTodayDate() {
    let today = new Date();
    let todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return todayDate
}

export function getYesterdayDate() {
    let today = new Date();
    let YesterdayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 1);
    return YesterdayDate
}

export function lastTwoDate() {
    let today = new Date();
    let YesterdayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 2);
    return YesterdayDate
}

export function lastThreeDate() {
    let today = new Date();
    let YesterdayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 3);
    return YesterdayDate
}

export function lastFourDate() {
    let today = new Date();
    let YesterdayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 4);
    return YesterdayDate
}




const ex = {
    getTodayDate,
    getYesterdayDate,
    lastTwoDate,
    lastThreeDate,
    lastFourDate

}

export default ex;