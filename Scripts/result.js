document.addEventListener("DOMContentLoaded", function () {
  submittedname.innerHTML = JSON.parse(localStorage.getItem("submission"));
  console.log("Loaded submission");
  console.log(submittedname);
});
                          
