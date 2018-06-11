const _buffer = {
  sessionData: {

  }
}

export const storage = {
  set:function(key,val){
    try{
      sessionStorage.setItem(key,JSON.stringify(val))
    }catch(err){
      _buffer.sessionData[key] = val;
    }
  },
  get:(key)=>{
    try{
     let val = sessionStorage.getItem(key)
     return JSON.parse(val)
    }catch(err){
      return _buffer.sessionData[key];
    }
  },
  clear:()=>{
    if (sessionStorage.clear) {
      sessionStorage.clear();
    } else {
      _buffer.sessionData = {};
    }
  },
  delete:(key)=>{
    if (sessionStorage.removeItem) {
      sessionStorage.removeItem(key);
    } else {
      delete _buffer.sessionData.key;
    }
  }
}