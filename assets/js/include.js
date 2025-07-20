window.addEventListener("DOMContentLoaded", function() {
  fetch("../components/header.html")
    .then(function(res) { return res.text(); })
    .then(function(data) { document.getElementById("header").innerHTML = data; });

  fetch("../components/footer.html")
    .then(function(res) { return res.text(); })
    .then(function(data) { document.getElementById("footer").innerHTML = data; });

  var yearSpan = document.getElementById("current-year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
