let container = document.getElementById("container");
document.addEventListener("submit", e => {
  e.preventDefault();

  let cards = document.getElementsByClassName("card");

  let imgs = document.getElementsByClassName("card-img-top");
  let titles = document.getElementsByClassName("card-title");
  let descriptions = document.getElementsByClassName("card-text");
  let linkToArticles = document.getElementsByClassName("btn");

  for (let i = 0; i < 20; i++) {
    imgs[i].setAttribute("src", "./imgs/loading.png");
  }

  phrase = document.querySelector("input").value;
  fetch("/news?q=" + phrase).then(response => {
    response.json().then(data => {
      for (let i = 0; i < 20; i++) {
        cards[i].style.display = "block";
        imgs[i].setAttribute("src", data[i].urlToImage);
        titles[i].textContent = data[i].title;
        descriptions[i].textContent = data[i].description;
        linkToArticles[i].setAttribute("href", data[i].url);
        linkToArticles[i].textContent = "Show more";
      }
    });
  });
});
