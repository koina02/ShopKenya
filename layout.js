// Inject navbar content into the element with id "navbar"
fetch("navbar.html")
  .then(res => res.text())
  .then(data => document.getElementById("navbar").innerHTML = data);

// Inject footer content into the element with id "footer"
fetch("footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);
