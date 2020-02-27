function combineDate(date, time) {
  let finalDate = date + "T" + time + ":00" + "Z";
  return new Date(finalDate);
}

module.exports = combineDate;
