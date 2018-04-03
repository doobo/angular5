// ToDo:获得cookie
export function  getCookie(key:string):string {
  let name = key + "=";
  let ca = document.cookie.split(';');
  for(let i=0; i<ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name)==0)
      return c.substring(name.length,c.length);

  }
  return null;
}

// ToDo:设置cookie过期时间单位/天 不传则关闭浏览器就过期
export function  putCookie(key:string,value:string,exdays:number=0) {
  if(exdays != 0) {
    let d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = key + "=" + value + "; " + expires;
  } else {
    document.cookie = key + "=" + value;
  }
}

// ToDo:删除cookie
export function delCookie(key:string) {
  this.put(key,' ',-1);
}
