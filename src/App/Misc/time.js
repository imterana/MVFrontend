/**
* @param {Date} timeFrom - start time
* @param {Date} timeTo - end time
* @return {String} "DD.MM HH:MM - HH:MM" formated time of event
*/
export function formatEventTime(timeFrom, timeTo) {
  const day = timeFrom.getDate();
  const month = timeFrom.getMonth() < 9 ?
    '0' + (timeFrom.getMonth() + 1) : timeFrom.getMonth() + 1;
  return '' + day + '.' + month + ' ' +
    formatTime(timeFrom) + ' - ' + formatTime(timeTo);
}

/**
 * @param {Date} date - date
 * @param {Date} timeFrom - start time
 * @param {Date} timeTo - end time
 * @return {string} "DD.MM.YYYY, HH:MM - HH:MM" formatted event time
 */
export function formatEventDate(date, timeFrom, timeTo) {
  let year = date.getFullYear();
  let month = date.getMonth() < 9 ?
    '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  let day = date.getDate() < 10 ?
    '0' + date.getDate() : date.getDate();
  return '' + day + '.' + month + '.' + year + ', ' +
    formatTime(timeFrom) + ' - ' + formatTime(timeTo);
}

/**
 * @param {Date} time - time
 * @return {string} "HH:MM" formatted time
 */
function formatTime(time) {
  let hour = time.getHours();
  let minute = time.getMinutes() < 10 ?
  '0' + time.getMinutes() : time.getMinutes();
  return '' + hour + ':' + minute;
}
