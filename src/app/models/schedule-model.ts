// 스케쥴 클레스 
export class Schedule {

    // 생성자
    constructor(public rowid: number, public title: string, public standardDate: Date, public isLunar: boolean, public isRepeat: boolean,
        public repeatMethod: string, public exceptDayOfWeek: number[], public supplantExceptDayOfWeek: number){

    }
}
