function ranAge() {

  let age = Math.floor((Math.random() * 1000000000000) + 1)
  document.getElementById("ranage").innerHTML = age;
  document.getElementById("ranagetitle").innerHTML = "Mrs MacDonald's Age:";
}

function ageFind() {
    var yesno = document.getElementById("YesNo");
    yesno.style.display = "inline";
}

var text;
function ageYes() {
  document.getElementById("AgeQuestion").innerHTML = "You are right! Good Job!"
  document.getElementById("AgeTitle").innerHTML = "Answer: Yes"
}
function ageNo() {
  document.getElementById("AgeQuestion").innerHTML = "WRONG! She is old."
  document.getElementById("AgeTitle").innerHTML = "Answer: No"
}