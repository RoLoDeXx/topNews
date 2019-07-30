let container = document.getElementById("container"),
  paginator = 0,
  cards = document.getElementsByClassName("card"),
  imgs = document.getElementsByClassName("card-img-top"),
  titles = document.getElementsByClassName("card-title"),
  descriptions = document.getElementsByClassName("card-text"),
  linkToArticles = document.getElementsByClassName("btn");

document.addEventListener("submit", e => {
  e.preventDefault();

  for (let i = 0; i < 10; i++) {
    imgs[i].setAttribute("src", "./imgs/loading.png");
  }

  initializer();
});

async function fetchNews(phrase) {
  let response = await fetch("/news?q=" + phrase);
  let data = response.json();
  return data;
}

const initializer = () => {
  phrase = document.querySelector("input").value;

  fetchNews(phrase).then(data => {
    renderInfo(data, paginator);
  });
};

const renderInfo = (data, paginator) => {
  for (let i = 0 + paginator; i < 10 + paginator; i++) {
    cards[i].style.display = "block";
    imgs[i].setAttribute("src", data[i].urlToImage);
    titles[i].textContent = data[i].title;
    descriptions[i].textContent = data[i].description;
    linkToArticles[i].setAttribute("href", data[i].url);
    linkToArticles[i].textContent = "Show more";
  }
};
