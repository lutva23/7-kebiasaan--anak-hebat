
let totalPoints = 0;
const badges = {};

function tambahPoin(kebiasaan) {
  totalPoints += 10;
  document.getElementById("total-points").innerText = totalPoints;
  badges[kebiasaan] = "🏅 Lencana diraih!";
  document.getElementById("badge-" + kebiasaan).innerText = badges[kebiasaan];
}
