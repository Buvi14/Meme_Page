// Fetch is used to fetch the data
fetch("https://meme-api.herokuapp.com/gimme")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    display(data.url);
  });

// display the image in Html
function display(url) {
  var img_tag = document.createElement("img");
  img_tag.src = url;
  var body_tag = document.querySelector("body");
  body_tag.appendChild(img_tag);
}
