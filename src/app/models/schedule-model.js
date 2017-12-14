// 스케쥴 클레스 
var Schedule = (function () {
    // 생성자
    function Schedule(rowid, title, standardDate, isLunar, isRepeat, repeatMethod, exceptDayOfWeek, supplantExceptDayOfWeek) {
        this.rowid = rowid;
        this.title = title;
        this.standardDate = standardDate;
        this.isLunar = isLunar;
        this.isRepeat = isRepeat;
        this.repeatMethod = repeatMethod;
        this.exceptDayOfWeek = exceptDayOfWeek;
        this.supplantExceptDayOfWeek = supplantExceptDayOfWeek;
    }
    return Schedule;
}());
export { Schedule };
//# sourceMappingURL=schedule-model.js.map