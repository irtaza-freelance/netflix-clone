const mail = document.getElementById("inp");
const button = document.querySelector(".but");
const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
const msg = document.querySelector(".msg");
const divele = document.querySelector(".divelement");
function check() {
  if (mail.value === "" || mail.value.trim() === "") {
    mail.style.border = "1px solid red";
    mail.placeholder = "Enter email first";
    mail.value = "";
    mail.style.outline = "none";
    mail.focus();
  } else if (!pattern.test(mail.value)) {
    msg.innerText = "Email Is Invalid.Please Enter Valid Email";
    divele.classList.add("show");
    mail.style.border = "1px solid red";
    mail.style.outline = "none";
    mail.focus();
  } else if (pattern.test(mail.value)) {
    localStorage.setItem("userEmail", mail.value);
    mail.style.border = "2px solid green";
    msg.innerText = "Your account is creted Successfully";
    mail.style.outline = "none";
    divele.classList.add("show");
  } else {
    return;
  }
}

mail.addEventListener("keydown", function (p) {
  if (p.key === "Enter") {
    check();
  }
});

mail.addEventListener("input", function () {
  divele.classList.remove("show");
  msg.innerText = "";
  mail.style.border = "1px solid #666";
  if (mail.value === "") {
    mail.style.border = "1px solid #666";
    mail.placeholder = "Email Adress";
    msg.innerText = "";
    divele.classList.remove("show");
  } else if (pattern.test(mail.value)) {
    mail.style.border = "2px solid green";
    msg.innerText = "Valid Email.";
    divele.classList.add("show");
  }
});
