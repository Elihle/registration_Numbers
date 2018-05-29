function Greetings(stored){
  var greetedNames = stored || {};
  var greeted = JSON.parse(localStorage.getItem("greetedNames"));

function greets(language, name){
  if(greetedNames[name] ==  undefined){
    greetedNames === 0;
  }
  if(language === "English"){
    return "Molo, " + name;
  }
  if(language === "Afrikaans"){
    return "Hallo, " + name;
  }
  if(language === "isiXhosa"){
    return "Molo, " + name;
  }
}

  function allNames(){
    return Objects.keys(greeted).length;
  }

  function countNames(){
    return greetedNames;
  }

  return {
    allGreets: Greetings,
    allNames: greets,
    greetCounter: allNames,
    countNames: countNames
  }
}
