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
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-3-Desktop-Womenn-08Dec2021.jpg",
    text: "Jackets",
  },
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-4-Desktop-Women-08Dec2021.jpg",
    text: "Tops and Tees",
  },
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-5-Desktop-Women-08Dec2021.jpg",
    text: "Dresses",
  },
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-6-Desktop-Women-08Dec2021.jpg",
    text: "Bottoms",
  },
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-7-Desktop-Women-08Dec2021.jpg",
    text: "Kurtas",
  },
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-8-Desktop-Women-08Dec2021.jpg",
    text: "Ethnic Bottoms",
  },
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-9-Desktop-Women-08Dec2021.jpg",
    text: "Sleepwear",
  },
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-10-Desktop-Women-08Dec2021.jpg",
    text: "Activewear",
  },
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-11-Desktop-Women-08Dec2021.jpg",
    text: "Lingerie",
  },
  {
    Image:
      "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/PC-A-12-Desktop-Women-08Dec2021.jpg",
    text: "Outfit Add-Ons",
  },
];

categoryItem.map(function (ele) {
  var mainDiv = document.querySelector("#category");

  var specdiv = document.createElement("div");
  specdiv.setAttribute("id", "specificblock");

  var image = document.createElement("img");
  image.setAttribute("id", "catImg");
  image.setAttribute("src", ele.Image);

  var para = document.createElement("p");
  para.setAttribute("id", "catText");
  para.textContent = ele.text;

  specdiv.append(image, para);
  mainDiv.append(specdiv);
});
