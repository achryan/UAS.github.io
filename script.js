// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-150px";
//   }
//   prevScrollpos = currentScrollPos;
// };

function openSide() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeSide() {
  document.getElementById("mySidenav").style.width = "0";
}
