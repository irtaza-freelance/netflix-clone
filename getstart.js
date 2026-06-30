const email = localStorage.getItem("userEmail");

document.getElementById(
  "pr"
).innerHTML = `We'll send a sign-up link to <span class="email"> ${email}</span> so you can use Netflix without a password on any device at any time.`;
