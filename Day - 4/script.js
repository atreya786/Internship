const username = document.getElementById("name");
const email1 = document.getElementById("email1");
const password1 = document.getElementById("password1");
// const email2 = document.getElementById("email2");
// const password2 = document.getElementById("password2");
const phone = document.getElementById("phone");
const button1 = document.getElementById("myButton1");
// const button2 = document.getElementById("myButton2");

button1.addEventListener("click", () => {
  if (
    username.value == "" ||
    email1.value == "" ||
    password1.value == "" ||
    phone.value == ""
  ) {
    alert("Please fill the form");
  } else {
    fetch("http://localhost:5000/myData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username.value,
        email: email1.value,
        password: password1.value,
        phone: phone.value,
      }),
    }).then((res) => {
      if (res.ok) {
        console.log(res);
        alert("Account Created Successfully");
        window.location.href = "./login.html";
      } else {
        alert("Error");
      }
    });
  }
});
