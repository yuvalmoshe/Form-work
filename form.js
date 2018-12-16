const validate = function () {
  let Salary = document.getElementById("Desired Salary").value
  if (parseInt(Salary) < 10000 || parseInt(Salary) > 16000) {
    let div = document.createElement("div")
    div.innerHTML = "You have to choose between 10,000 and 16,000."
    div.style.color = "red";
    document.getElementById("putHere").appendChild(div);

  }

  let Phone = document.getElementById("Phone").value
  if (Phone.length != 10) {
    let div = document.createElement("div")
    div.innerHTML = "You need to select number up to 10."
    div.style.color = "red";
    document.getElementById("putHere").appendChild(div);
  }

  let name = document.getElementById("name").value
  if (name.length <= 2) {
    let div = document.createElement("div")
    div.innerHTML = "name must be longer than 2 characters"
    div.style.color = "red";
    document.getElementById("putHere").appendChild(div);
  }

  let birthday = document.getElementById("birthday").value
  if (!birthday) {
    let div = document.createElement("div")
    div.innerHTML = "Birthday may not be null";
    div.style.color = "red";
    document.getElementById("putHere").appendChild(div);
  }
}




