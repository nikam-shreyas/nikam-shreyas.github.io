function changeTheme() {
  let currentTheme = document.documentElement.getAttribute("data-bs-theme");

  if (currentTheme === "light") {
    // change light theme to dark
    document.documentElement.setAttribute("data-bs-theme", "dark");
    document
      .getElementById("theme")
      .setAttribute("class", "nav-link mt-1 fa-solid p-2 fa-moon ");
  } else {
    // change dark theme to light
    document.documentElement.setAttribute("data-bs-theme", "light");
    document
      .getElementById("theme")
      .setAttribute("class", "nav-link mt-1 fa-solid p-2 fa-sun");
  }
}

function loadPage(pageName) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", pageName + ".html", true);
  xhttp.send();
}
