const claimBtn = document.getElementById("claimBtn");
const fbShare = document.getElementById("fb-share");

const monetizationUrl = "https://www.profitableratecpm.com/gzc0auku6?key=1c7bc620c901ec892754919ccc314242";

let claimed = false;

function redirectToMonetization() {
  if (claimed) return;
  claimed = true;
  window.location.href = monetizationUrl;
}

claimBtn.addEventListener("click", redirectToMonetization);

window.addEventListener("DOMContentLoaded", () => {
  fbShare.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(monetizationUrl)}`;

  const randomDelay = Math.floor(Math.random() * 3000) + 2000;
  setTimeout(() => {
    if (!claimed) {
      claimBtn.click();
    }
  }, randomDelay);
});
