let index = 0;
function updateSlider() {
  const track = document.getElementById("track");
  const items = track.children.length;

  const visible = 4;
  const maxIndex = items - visible;

  const left = document.querySelector(".left");
  const right = document.querySelector(".right");

  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;

  left.classList.toggle("hidden", index === 0);
  right.classList.toggle("hidden", index === maxIndex);

  const slideWidth =
    track.children[0].offsetWidth + track.children[0].offsetWidth * 0.01;

  track.style.transform = `translateX(-${index * slideWidth}px)`;
}
function slide(dir) {
  index += dir * 4; // 4 by 4 move
  updateSlider();
}
updateSlider();

function toggleMenu(btn) {
  const box = btn.parentElement;

  // close all others first (accordion behavior)
  document.querySelectorAll(".dropdown-box").forEach((item) => {
    if (item !== box) {
      item.classList.remove("open");
      item.querySelector(".drop-btn").classList.remove("active");
    }
  });

  // toggle current
  btn.classList.toggle("active");
  box.classList.toggle("open");
}

const sign = document.querySelector(".signIn");
sign.addEventListener("click", function () {
  window.location.href = "../html files/sign.html";
});

// pehla input
const mail = document.getElementById("files");
const button = document.querySelector(".but");
const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
const msg = document.querySelector(".msg");
const divele = document.querySelector(".divelement");
function check() {
  if (mail.value === "" || mail.value.trim() === "") {
    mail.style.border = "1px solid red";
    mail.placeholder = "Enter email first";
    mail.value = "";
    mail.focus();
  } else if (!pattern.test(mail.value)) {
    msg.innerText = "Email Is Invalid.Please Enter Valid Email";
    divele.classList.add("show");
    mail.style.border = "1px solid red";
    mail.focus();
  } else if (pattern.test(mail.value)) {
    localStorage.setItem("userEmail", mail.value);
    mail.style.border = "2px solid green";
    divele.classList.add("show");
    window.location.href = "../html files/getstart.html";
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
    msg.style.background = "transparent";
    // divele.classList.add("show");
    mail.style.content = "none";
  } else {
    return;
  }
});

// /+++++++++++++++++  next niche wala input

const input = document.querySelector("#adres");
const buton = document.querySelector(".bat");
const patern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
const start = document.querySelector(".started");
const divelem = document.querySelector(".divelemen");
const mseg = document.querySelector(".ms");

function claim() {
  if (input.value === "" || input.value.trim() === "") {
    input.style.border = "1px solid red";
    input.placeholder = "Enter email first";
    input.value = "";
    input.focus();
  } else if (!patern.test(input.value)) {
    mseg.innerText = "Email Is Invalid.Please Enter Valid Email";
    divelem.classList.add("show");
    input.style.border = "1px solid red";
    input.focus();
  } else if (patern.test(input.value)) {
    localStorage.setItem("userEmail", input.value);
    input.style.border = "2px solid green";
    divelem.classList.add("show");
    window.location.href = "../html files/getstart.html";
  } else {
    return;
  }
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    claim();
  }
});

input.addEventListener("input", function () {
  divelem.classList.remove("show");
  mseg.innerText = "";
  input.style.border = "1px solid #666";

  if (input.value === "") {
    input.style.border = "1px solid #666";
    input.placeholder = "Email Adress";
    mseg.innerText = "";
    divelem.classList.remove("show");
  } else if (patern.test(input.value)) {
    input.style.border = "2px solid green";
    // divelem.classList.add("show");
    mail.style.content = "none";
  } else {
    return;
  }
});

const model = document.getElementById("model");
const modalContent = document.querySelector(".model-item");
const img = document.querySelector(".modelImg");
const badge = document.querySelector(".model-badge");
const para = document.querySelector(".modelPara");
function showMovie(type) {
  document.body.style.overflow = "hidden";
  if (type === "wish") {
    model.style.display = "block";
    modalContent.style.backgroundImage = "url(../images/ifwishki.webp)";
    img.src = "../images/ifwish.webp";
    badge.innerHTML = `
      <h5>
      <span class="badge text-bg-secondary">2026</span>
      <span class="badge text-bg-secondary">18+</span>
      <span class="badge text-bg-secondary">Show</span>
      <span class="badge text-bg-secondary">Horror</span>
      <span class="badge text-bg-secondary">Mysterio</span>
      </h5>
    `;
    para.innerText = `A mysterious app promises wishes — then starts a countdown to death. As a group of teens becomes entangled, they must break the deadly chain to survive.`;
    document.body.style.overflow = "hidden";
  }
  if (type === "maa") {
    model.style.display = "block";
    modalContent.style.backgroundImage = "url(../images/mabehen.webp)";
    img.src = "../images/bhen.webp";
    badge.innerHTML = `
      <h5>
      <span class="badge text-bg-secondary">2026</span>
      <span class="badge text-bg-secondary">13+</span>
      <span class="badge text-bg-secondary">Movie</span>
      <span class="badge text-bg-secondary">Comedies</span>
      <span class="badge text-bg-secondary">Drama</span>
      </h5>
    `;
    para.innerText = `When trouble knocks on her door, a mother and her estranged daughters attempt to cover up a crime in a nosy colony where no secret is safe.`;
    document.body.style.overflow = "hidden";
  }
  if (type === "dhur") {
    model.style.display = "block";
    modalContent.style.backgroundImage = "url(../images/dhur.webp)";
    img.src = "../images/reve.webp";
    badge.innerHTML = `
      <h5>
      <span class="badge text-bg-secondary">2026</span>
      <span class="badge text-bg-secondary">18+</span>
      <span class="badge text-bg-secondary">Movie</span>
      <span class="badge text-bg-secondary">Thriller</span>
      <span class="badge text-bg-secondary">Action</span>
      </h5>
    `;
    para.innerText = `Driven by personal tragedy, Hamza dives deeper into his deep-cover mission to ruin Pakistan's criminal underworld in this unseen sequel to "Dhurandhar."`;
    document.body.style.overflow = "hidden";
  }
  if (type === "ber") {
    model.style.display = "block";
    modalContent.style.backgroundImage = "url(../images/berlin.webp)";
    img.src = "../images/bere.webp";
    badge.innerHTML = `
      <h5>
      <span class="badge text-bg-secondary">2026</span>
      <span class="badge text-bg-secondary">18+</span>
      <span class="badge text-bg-secondary">Show</span>
      <span class="badge text-bg-secondary">Action</span>
      <span class="badge text-bg-secondary">Drama</span>
      </h5>
    `;
    para.innerText = `When trouble knocks on her door, a mother and her estranged daughters attempt to cover up a crime in a nosy colony where no secret is safe.`;
    document.body.style.overflow = "hidden";
  }
  if (type === "ran") {
    model.style.display = "block";
    modalContent.style.backgroundImage = "url(../images/der.webp)";
    img.src = "../images/har.webp";
    badge.innerHTML = `
      <h5>
      <span class="badge text-bg-secondary">2025</span>
      <span class="badge text-bg-secondary">18+</span>
      <span class="badge text-bg-secondary">Action</span>
      <span class="badge text-bg-secondary">Movie</span>
      <span class="badge text-bg-secondary">Thriller</span>
      </h5>
    `;
    para.innerText = `When trouble knocks on her door, a mother and her estranged daughters attempt to cover up a crime in a nosy colony where no secret is safe.`;
    document.body.style.overflow = "hidden";
  }
  if (type === "kara") {
    model.style.display = "block";
    modalContent.style.backgroundImage = "url(../images/kar.webp)";
    img.src = "../images/kara.webp";
    badge.innerHTML = `
      <h5>
      <span class="badge text-bg-secondary">2026</span>
      <span class="badge text-bg-secondary">13+</span>
      <span class="badge text-bg-secondary">Movie</span>
      <span class="badge text-bg-secondary">Comedies</span>
      <span class="badge text-bg-secondary">Drama</span>
      </h5>
    `;
    para.innerText = `When trouble knocks on her door, a mother and her estranged daughters attempt to cover up a crime in a nosy colony where no secret is safe.`;
    document.body.style.overflow = "hidden";
  }
  if (type === "hiest") {
    model.style.display = "block";
    modalContent.style.backgroundImage = "url(../images/netfl.webp)";
    img.src = "../images/hei.webp";
    badge.innerHTML = `
      <h5>
      <span class="badge text-bg-secondary">2026</span>
      <span class="badge text-bg-secondary">13+</span>
      <span class="badge text-bg-secondary">Movie</span>
      <span class="badge text-bg-secondary">Comedies</span>
      <span class="badge text-bg-secondary">Drama</span>
      </h5>
    `;
    para.innerText = `When trouble knocks on her door, a mother and her estranged daughters attempt to cover up a crime in a nosy colony where no secret is safe.`;
    document.body.style.overflow = "hidden";
  }
  if (type === "swa") {
    model.style.display = "block";
    modalContent.style.backgroundImage = "url(../images/swad.webp)";
    img.src = "../images/swap.webp";
    badge.innerHTML = `
      <h5>
      <span class="badge text-bg-secondary">2026</span>
      <span class="badge text-bg-secondary">13+</span>
      <span class="badge text-bg-secondary">Movie</span>
      <span class="badge text-bg-secondary">Comedies</span>
      <span class="badge text-bg-secondary">Drama</span>
      </h5>
    `;
    para.innerText = `When trouble knocks on her door, a mother and her estranged daughters attempt to cover up a crime in a nosy colony where no secret is safe.`;
    document.body.style.overflow = "hidden";
  }
  if (type === "life") {
    model.style.display = "block";
    modalContent.style.backgroundImage = "url(../images/ife.webp)";
    img.src = "../images/lofe.webp";
    badge.innerHTML = `
      <h5>
      <span class="badge text-bg-secondary">2026</span>
      <span class="badge text-bg-secondary">13+</span>
      <span class="badge text-bg-secondary">Movie</span>
      <span class="badge text-bg-secondary">Comedies</span>
      <span class="badge text-bg-secondary">Drama</span>
      </h5>
    `;
    para.innerText = `When trouble knocks on her door, a mother and her estranged daughters attempt to cover up a crime in a nosy colony where no secret is safe.`;
    document.body.style.overflow = "hidden";
  }

  if (type === "er") {
    model.style.display = "block";
    modalContent.style.backgroundImage = "url(../images/er.webp)";
    img.src = "../images/r.webp";
    badge.innerHTML = `
      <h5>
      <span class="badge text-bg-secondary">1994</span>
      <span class="badge text-bg-secondary">18+</span>
      <span class="badge text-bg-secondary">Show</span>
      <span class="badge text-bg-secondary">Drama</span>
      </h5>
    `;
    para.innerText = `The ER doctors and staff of Chicago's Cook County General Hospital grapple with life-and-death decisions, moral dilemmas and personal dramas.`;
    document.body.style.overflow = "hidden";
  }
}

function closeMovie() {
  model.style.display = "none";
  document.body.style.overflow = "auto";
}
