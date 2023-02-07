let i = 0;
(function myFunc() {
  i++;
  console.log("NOW");
  if (i < 10) {
    myFunc();
  }
})();
