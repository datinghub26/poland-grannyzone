// script.js

const smartLink = "https://safeoffers.pro/a/ERqB9fpAmVFZykG";

const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", () => {

  joinBtn.innerHTML = "ŁADOWANIE...";

  setTimeout(() => {

    window.location.href = smartLink;

  }, 1200);

});
