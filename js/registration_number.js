function regNumbers(stored){
var regStored = stored || {};

function countRegNumber(regNum){

return regNum.split(',').length;
}
regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');


function addedReg(){
  return regStored;
}

return {
  countAll: countRegNumber,
  addAllReg: addedReg
}
}
