// let imageInp = document.querySelector("#add-img-inp");
// let output = document.querySelector("#output");
// let btn = document.querySelector(".submit");
// imageInp.value = "";

document.querySelector(".submit").onclick = function () {
  var val = document.querySelector("#add-img-inp").value,
    src = "http://webpage.com/images/" + val + ".png",
    img = document.createElement("img");

  img.src = src;
  document.body.appendChild(img);
};

// imageInp.addEventListener("click", render());
