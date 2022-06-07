document.querySelector(".sign-in-btn").addEventListener("click", (e) => {
  e.preventDefault;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (!(username == "Cognizant" && password == "Hello123")) {
    alert("Creditentials are not valid");
  } else {
    window.open("./pages/home.html", "_self");
  }
});
