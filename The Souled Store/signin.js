function my_log() {
  let x = JSON.parse(localStorage.getItem("signup"));
  console.log(x);
  let Email1 = document.querySelector("#email");
  let Password1 = document.querySelector("#password");

  if (Email1 == x.Email2 && Password1 == x.Pass) {
    alert("Login Succesfull");
  } else if (Email1 == "" && Password1 == "") {
    alert("Please fill in details");
  }
}
