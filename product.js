//  HEADER  SECTION

//  SORTING SECTION

//  PRODUCT DISPLAY SECTION
var dataOfProduct = [
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010601390-Pink-Magenta-1000010601390-10132021_01-2100.jpg",
    produPrice: "₹599",
    prodDesc: "MAX Textured Round Neck Sweatshirt",
    productcolor: "pink",
    producttype: "Pullover",
    productdesgine: "solid",
    productSleveLength: "Full Sleves",
    Browse: "New",
    productpromotions: "Max300",
    productDiscount: "40% above",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010756375-Blue-Malibu-1000010756375-11112021_01-2100.jpg",
    produPrice: "₹999",
    prodDesc: "MAX Solid Hooded Sweatshirt",
    productcolor: "blue",
    producttype: "Hoddie",
    productdesgine: "solid",
    productSleveLength: "Full Sleves",
    Browse: "New",
    productpromotions: "Max300",
    productDiscount: "10% above",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010682861-Pink-Candypink-1000010682861-9222021_01-2100.jpg",
    produPrice: "₹499",
    prodDesc: "MAX Solid Full Sleeves Sweatshirt",
    productcolor: "pink",
    producttype: "Hoddie",
    productdesgine: "solid",
    productSleveLength: "Full Sleves",
    Browse: "New",
    productpromotions: "Sale",
    productDiscount: "40% above",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010742415-Blue-Blue-1000010742415-11042021_01-2100.jpg",
    produPrice: "₹799",
    prodDesc: "MAX Textured Ribbed Sweatshirt",
    productcolor: "blue",
    producttype: "Hoddie",
    productdesgine: "color blocked",
    productSleveLength: "Full Sleves",
    Browse: "New",
    productpromotions: "Sale",
    productDiscount: "40% above",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010410362-Purple-Mauve-1000010410362-7292021_01-2100.jpg",
    produPrice: "₹999",
    prodDesc: "MAX Textured Hooded Sweatshirt",
    productcolor: "pink",
    producttype: "Hoddie",
    productdesgine: "solid",
    productSleveLength: "Full Sleves",
    Browse: "Online Only",
    productpromotions: "Sale",
    productDiscount: "60% above",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010544891-Purple-Lavender-1000010544891-9292021_01-2100.jpg",
    produPrice: "₹699",
    prodDesc: "MAX Textured Mock Collar Sweatshirt",
    productcolor: "blue",
    producttype: "Hoddie",
    productdesgine: "textured",
    productSleveLength: "Full Sleves",
    Browse: "Online Only",
    productpromotions: "Sale",
    productDiscount: "60% above",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541877-Pink-Blush-1000010541877-9152021_01-2100.jpg",
    produPrice: "₹599",
    prodDesc: "MAX Printed Round Neck Fit Sweatshirt",
    productcolor: "pink",
    producttype: "Hoddie",
    productdesgine: "printed",
    productSleveLength: "Full Sleves",
    Browse: "Online Only",
    productpromotions: "Max300",
    productDiscount: "60% above",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010503266-Blue-Aqua-1000010503266-11232021_01-2100.jpg",
    produPrice: "₹599",
    prodDesc: "MAX Printed Round Neck Sweatshirt",
    productcolor: "blue",
    producttype: "Hoddie",
    productdesgine: "printed",
    productSleveLength: "Full Sleves",
    Browse: "Online Only",
    productpromotions: "Max300",
    productDiscount: "20% above",
  },
];
var count = document.querySelector("#countProduct");
var ProductTotal = dataOfProduct.length;
count.textContent = ProductTotal + " " + "Products";

dataOfProduct.map(function (ele) {
  var appenddiv = document.querySelector("#allProduct");
  var productDiv = document.createElement("div");
  productDiv.setAttribute("id", "productDivSpecific");

  var productImg = document.createElement("img");
  productImg.setAttribute("id", "hovering");
  productImg.setAttribute("src", ele.proudimg);

  var proudprice = document.createElement("h2");
  proudprice.textContent = ele.produPrice;

  var prouddescription = document.createElement("p");
  prouddescription.setAttribute("id", "proddesc");
  prouddescription.textContent = ele.prodDesc;

  var productbutton = document.createElement("button");
  productbutton.setAttribute("id", "buttonproduct");
  productbutton.textContent = "ADD TO BASKET";

  productDiv.append(productImg, proudprice, prouddescription, productbutton);
  appenddiv.append(productDiv);
});

//  FOOTER SECTION
