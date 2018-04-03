export function clearNullAndUndefinedValue(value):void {
  if(value){
    Object.keys(value).forEach(key=>{
      if(value[key] == null || value[key] == undefined){
        delete value[key];
      }
      if(value[key] instanceof Array && value[key].length < 1){
        delete value[key];
      }
    })
  }
}
