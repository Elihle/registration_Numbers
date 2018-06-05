function Registrations(stored){
  var regs = '';
  var regSored = stored || {};

  for (var i=0; i<stored;i++){
    var location = 'CA'|| 'CK' || 'CJ' || 'CL';
    if (stored[i].startsWith(location)){
       regStored.push(stored[i]);
    }
  }

function countRegs(){
    return regStored.length;
}

function countAllFromTown(regNum, location){
 if (regStored[location] === undefined && regStored[location].startsWith('CA')||regStored[location].startsWith('CL')||regStored[location].startsWith('CK')||regStored[location].startsWith('CJ')){
   regStored[location] === 0;
 }

 // if (location === "Cape Town"){
 //   return "CA" + regNum;
 // }
 //
 // if (location === "Paarl"){
 //   return "CL" + regNum;
 // }
 //
 // if (location === "George"){
 //   return "CJ" + regNum;
 // }
 //
 // if (location === "Stellenbosch"){
 //   return "CK" + regNum;
 // }
}

function regCount(){
  return Object.keys(stored);
}

function allTowns(){
  return regStored;
}

return {
  allRegs: countRegs,
  fromTown: countAllFromTown,
  countTowns: regCount,
  townStored: allTowns
}
}
