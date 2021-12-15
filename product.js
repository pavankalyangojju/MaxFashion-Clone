//  HEADER  SECTION

//  SORTING SECTION

//  PRODUCT DISPLAY SECTION
var dataOfProduct = [
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010601390-Pink-Magenta-1000010601390-10132021_01-2100.jpg",
    produPrice: "599",
    prodDesc: "MAX Textured Round Neck Sweatshirt",
    productcolor: "black",
    producttype: "Pullover",
    productdesgine: "solid",
    productSleveLength: "Full Sleves",
    Browse: "New",
    productpromotions: "Max300",
    productDiscount: "40% above",
  },
];

dataOfProduct.map(function (ele) {
  var productDiv = document.createElement("div");
  productDiv.setAttribute("id", "productDivSpecific");

  var productImg = document.createElement("img");
  productImg.setAttribute("src", "ele.proudimg");

  var proudprice = document.createElement("h3");
  proudprice.textContent = ele.produPrice;

  var prouddescription = document.createElement("p");
  prouddescription.setAttribute("id", "proddesc");
  prouddescription.textContent = ele.prodDesc;

  productDiv.append(productImg, proudprice, prouddescription);
});

//  FOOTER SECTION
