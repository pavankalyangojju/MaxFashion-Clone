var categoryItem = [
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-1-Desktop-Women-08Dec2021.jpg",
    text: "Sweatshirts",
  },
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-2-Desktop-Women-08Dec2021.jpg",
    text: "Sweaters",
  },
];

categoryItem.map(function (ele) {
  var mainDiv = document.querySelector("#category");

  var specdiv = document.createElement("div");
  specdiv.setAttribute("id", "specificblock");

  var image = document.createElement("img");
  //   image.setAttribute("id", "catImg");
  image.setAttribute("src", ele.Image);

  var para = document.createElement("p");
  para.setAttribute("id", "catText");
  para.textContent = ele.text;

  specdiv.append(image, para);
  mainDiv.append(specdiv);
});
