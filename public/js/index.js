let container = document.getElementById("container");
document.addEventListener("submit", e => {
  e.preventDefault();

  let cards = document.getElementsByClassName("card"),
    imgs = document.getElementsByClassName("card-img-top"),
    titles = document.getElementsByClassName("card-title"),
    descriptions = document.getElementsByClassName("card-text"),
    linkToArticles = document.getElementsByClassName("btn");

  for (let i = 0; i < 20; i++) {
    imgs[i].setAttribute("src", "./imgs/loading.png");
  }

  phrase = document.querySelector("input").value;

  fetchNews(phrase).then(data => {
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

async function fetchNews(phrase) {
  let response = await fetch("/news?q=" + phrase);
  let data = response.json();
  return data;
}
