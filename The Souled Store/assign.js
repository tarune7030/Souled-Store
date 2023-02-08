function myFun() {
  let Name = document.querySelector("#name").value;
  let Email2 = document.querySelector("#email").value;
  let Pass = document.querySelector("#pass").value;

  if (Name != "" && Email2 != "" && Pass != "") {
    let signObj = {
      Name,
      Email2,
      Pass,
    };
    alert("Sign Up Succesfull");
    localStorage.setItem("signup", JSON.stringify(signObj));
  } else {
    alert("Please Fill in Details");
  }
}
