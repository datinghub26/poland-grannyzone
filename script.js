const smartLink = "https://safeoffers.pro/a/ERqB9fpAmVFZykG";

const button = document.getElementById("joinBtn");

button.addEventListener("click", () => {

  button.innerHTML = "ŁADOWANIE...";

  setTimeout(() => {
    window.location.href = smartLink;
  }, 1200);

});
