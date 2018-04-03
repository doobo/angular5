import { Pipe, PipeTransform } from '@angular/core';
/**
 * 将时间格式化为 几分钟前 几个钟前...的格式
 */
@Pipe({
  name: 'dateRange',
})
export class DateRange implements PipeTransform {

  transform(dateString: string, ...args) {
    let date = new Date(dateString);
    let dateTimeStamp = date.getTime();
    let minute = 1000 * 60;
    let hour = minute * 60;
    let now = new Date();
    let diffValue = now.getTime() - dateTimeStamp;
    if(diffValue < 0){return;}
    let hourC =diffValue/hour;
    let minC =diffValue/minute;
    //判断是不是今年
    let y1 = date.getFullYear();
    let y2 = now.getFullYear();

    if(hourC > 24 || y1<y2) {
      let m = date.getMonth() + 1;
      let m1 = m < 10 ? ('0' + m) : m;
      let d = date.getDate();
      let d1 = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      let h1=h < 10 ? ('0' + h) : h;
      let minute = date.getMinutes();
      let minute1 = minute < 10 ? ('0' + minute) : minute;
      if(y1<y2)
        return y1.toString().substr(2,2) + '-' + m1 + '-' + d1+' '+h1+':'+minute1;
      return m1 + '-' + d1+' '+h1+':'+minute1;
    }else if(hourC >= 1){
      return hourC.toFixed(0) +"小时前";
    }
    else if(minC >= 1){
      return minC.toFixed(0) +"分钟前";
    }else
      return "刚刚";
  }
}
