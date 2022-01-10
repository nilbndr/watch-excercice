export class Watch {
  hours: number;
  minutes: number;
  constructor() {
    var date = new Date;
    //date.setTime(result_from_Date_getTime);

    //var seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours = date.getHours();
  }

  increaseHours(): void {
    this.hours+=1;
    if(this.hours > 23){
      this.hours = 0;
    }
  }
  increaseMinutes(): void {
    this.minutes+=1;
    if(this.minutes > 59){
      this.minutes = 0;
      this.increaseHours();
    }
  }

  get(): string {
    if(this.minutes<10)
      return this.hours.toString() + " : 0" + this.minutes.toString();
    else
      return this.hours.toString() + " : " + this.minutes.toString();
  }

}
