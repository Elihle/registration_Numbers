function regNumbers(stored){
var regStored = stored || {};

function countAllFromTown(regNum, location){
 if (regStored[location] === undefined){
   regStored[location] === 0;
   localStorage.setItem("regStored", JSON.stringify({}));
 }

 if (location === "Cape Town"){
   return "CA" + regNum;
 }

 if (location === "Paarl"){
   return "CL" + regNum;
 }

 if (location === "George"){
   return "CJ" + regNum;
 }

 if (location === "Stellenbosch"){
   return "CK" + regNum;
 }
}

function regCount(){
  var stored = JSON.parse(localStorage.getItem("regStored"));
  return Object.keys(stored);
}

function allTowns(){
  return regStored;
}

return {
  fromTown: countAllFromTown,
  countTowns: regCount,
  townStored: allTowns
}
}
