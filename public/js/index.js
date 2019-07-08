let form = document.querySelector("form");
let text = document.getElementById("result");

document.addEventListener("submit", e => {
  e.preventDefault();
  phrase = document.querySelector("input").value;
  fetch("/news?q=" + phrase).then(response => {
    response.json().then(data => {
      console.log(data[0].author);
      text.textContent = data.data[0].author;
    });
  });
});
