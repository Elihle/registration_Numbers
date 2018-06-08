function Registrations(stored) {
  var regs = '';
  var regStored = stored || {};

  function allFromTown(location) {
    if (regStored[location] === undefined &&
      (location.startsWith('CA') || location.startsWith('CL') ||
        location.startsWith('CK') || location.startsWith('CJ'))) {
      regStored[location] = 0;
    }
  }

  function getRegs() {
    return regs;
  }

  function getRegsMap() {
    return Object.keys(regStored);
  }

  function filterAllTown(town) {
    var allTowns = Object.keys(regStored);
    if (town === 'Select Town') {
      return allTowns;
    }
    var townFilter = allTowns.filter(function townChoice(townReg, townSelect) {
      return townReg.startsWith(town);
    })
    location.hash = town;
    return townFilter;
  }

  return {
    fromATown: allFromTown,
    allRegs: getRegs,
    regsMap: getRegsMap,
    filterAll: filterAllTown
  }
}
