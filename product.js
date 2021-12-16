//  HEADER  SECTION
document.querySelector("#button").addEventListener("click", go);
function go() {
  window.location.href = "product.html";
}
function togglepop() {
  document.querySelector("#popup-1").classList.toggle("yes");
}
document.querySelector("#popcontinue").addEventListener("click", popcont);

function popcont() {
  // window.location.href="signin.html"
}

function popfunct() {
  document.getElementById("twopop").classList.toggle("value");
  alert(
    " USe code for 03351 for verifying your mobile number with Maxfashion.com. OTP is valid for 5 minutes(s) "
  );
}

document.querySelector("#inputform").addEventListener("click", inputfunction);
var box5 = document.querySelector("#inputnumber5").value;
box5 = 3;
function inputfunction(event) {
  event.preventDefault();
  var box1 = document.querySelector("#inputnumber1").value;
  var box2 = document.querySelector("#inputnumber2").value;
  var box3 = document.querySelector("#inputnumber3").value;
  var box4 = document.querySelector("#inputnumber4").value;
  var box5 = document.querySelector("#inputnumber5").value;

  if (box1 == 0 && box2 == 3 && box3 == 3 && box4 == 5 && box5 == 1) {
    window.location.href = "vineeth.html";
  }
}

var addevent = document.getElementById("prodPageAE");
addevent.addEventListener("click", function () {
  window.location.href = "body1.html";
});

//  SORTING SECTION

//  PRODUCT DISPLAY SECTION

var dataOfProduct = [
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010601390-Pink-Magenta-1000010601390-10132021_01-2100.jpg",
    produPrice: "₹599",
    prodDesc: "MAX Textured Round Neck Sweatshirt",
    productcolor: "pink",
    producttype: "pullover",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "Max300",
    productDiscount: "40",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010756375-Blue-Malibu-1000010756375-11112021_01-2100.jpg",
    produPrice: "₹999",
    prodDesc: "MAX Solid Hooded Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "Max300",
    productDiscount: "10",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010682861-Pink-Candypink-1000010682861-9222021_01-2100.jpg",
    produPrice: "499",
    prodDesc: "MAX Solid Full Sleeves Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "sale",
    productDiscount: "40",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010742415-Blue-Blue-1000010742415-11042021_01-2100.jpg",
    produPrice: "₹799",
    prodDesc: "MAX Textured Ribbed Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "color blocked",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "sale",
    productDiscount: "40",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010410362-Purple-Mauve-1000010410362-7292021_01-2100.jpg",
    produPrice: "₹999",
    prodDesc: "MAX Textured Hooded Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010544891-Purple-Lavender-1000010544891-9292021_01-2100.jpg",
    produPrice: "₹699",
    prodDesc: "MAX Textured Mock Collar Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "textured",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541877-Pink-Blush-1000010541877-9152021_01-2100.jpg",
    produPrice: "₹599",
    prodDesc: "MAX Printed Round Neck Fit Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "printed",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010503266-Blue-Aqua-1000010503266-11232021_01-2100.jpg",
    produPrice: "₹599",
    prodDesc: "MAX Printed Round Neck Sweatshirt",
    productcolor: "blue",
    producttype: "Hoddie",
    productdesgine: "printed",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "20",
  },

  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010682836-Blue-Lightblue-1000010682836-9222021_01-2100.jpg",
    produPrice: "₹999",
    prodDesc: "MAX Printed Round Neck Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "jacquard",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "70",
  },

  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010773077-Green-Oliveg-1000010773077-10202021_01-2100.jpg",
    produPrice: "₹449",
    prodDesc: "MAX Printed Round Sweatshirt",
    productcolor: "green",
    producttype: "hoddie",
    productdesgine: "jacquard",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "80",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009224156-Pink-Blush-1000009224156-10182020_01-2100.jpg",
    produPrice: "₹450",
    prodDesc: "MAX Printed Hooded Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "printed",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "Max300",
    productDiscount: "50",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010605412-Purple-Purple-1000010605412-9222021_01-2100.jpg",
    produPrice: "₹999",
    prodDesc: "MAX Textured Hooded Zip Sweatshirt",
    productcolor: "purple",
    producttype: "front open",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "Max300",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010503370-Pink-Peachapct-1000010503370-11302021_02-2100.jpg",
    produPrice: "₹999",
    prodDesc: "MAX Embellished Round Neck Sweatshirt",
    productcolor: "pink",
    producttype: "hoodie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010615711-Beige-Oatmarl-1000010615711-9152021_02-2100.jpg",
    produPrice: "499",
    prodDesc: "MAX Printed Full Sleeves Sweatshirt",
    productcolor: "white",
    producttype: "hoodie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009311972-Grey-Greymel-1000009311972-9032020_01-2100.jpg",
    produPrice: "₹350",
    prodDesc: "MAX Typgraphic Full Sleeves Sweatshirt",
    productcolor: "pink",
    producttype: "front open",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009311806-Yellow-Yellow-1000009311806-11022020_01-2100.jpg",
    produPrice: "₹475",
    prodDesc: "MAX Solid Full Sleeves Sweatshirt",
    productcolor: "yellow",
    producttype: "pullover",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010468539-Black-Black-1000010468539-9152021_01-2100.jpg",
    produPrice: "₹599",
    prodDesc: "MAX Printed regular fit Sweatshirt",
    productcolor: "White",
    producttype: "pullover",
    productdesgine: "solid",
    productSleveLength: "half sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010642197-Beige-Oatmarl-1000010642197-10202021_01-2100.jpg",
    produPrice: "₹449",
    prodDesc: "MAX Printed Round Neck Sweatshirt",
    productcolor: "white",
    producttype: "front open",
    productdesgine: "printed",
    productSleveLength: "half sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010694522-Black-Black-1000010694522-10202021_01-2100.jpg",
    produPrice: "₹699",
    prodDesc: "MAX Colorblocked High-Neck Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "printed",
    productSleveLength: "half sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010504181-Grey-Greymel-1000010504181-9012021_01-2100.jpg",
    produPrice: "₹899",
    prodDesc: "MAX Solid Hooded Sweatshirt",
    productcolor: "white",
    producttype: "front open",
    productdesgine: "texture",
    productSleveLength: "full sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },

  //  FOOTER SECTION
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

  //   var bottomdiv = document.createElement("div");
  //   productDiv.setAttribute("id", "bottondiv");

  var productbutton = document.createElement("button");
  productbutton.setAttribute("id", "buttonproduct");
  productbutton.textContent = "ADD TO BASKET";

  productDiv.append(productImg, proudprice, prouddescription, productbutton);

  appenddiv.append(productDiv);
});

//  FOOTER SECTION
//  FOOTER SECTION

function typesort() {
  var sortedarr = [];
  var type = document.querySelector("#type").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (type == dataOfProduct[i].producttype) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function design() {
  var sortedarr = [];
  var type = document.querySelector("#design").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (type == dataOfProduct[i].productdesgine) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function color() {
  var sortedarr = [];
  var color = document.querySelector("#color").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (color == dataOfProduct[i].productcolor) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function sleeve() {
  var sortedarr = [];
  var sleeve = document.querySelector("#sleeve").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (sleeve == dataOfProduct[i].productSleveLength) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function browse() {
  var sortedarr = [];
  var browse = document.querySelector("#browse").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (browse == dataOfProduct[i].Browse) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function promotions() {
  var sortedarr = [];
  var browse = document.querySelector("#promotions").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (browse == dataOfProduct[i].productpromotions) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}
function discount() {
  var sortedarr = [];
  var browse = document.querySelector("#discount").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (browse == dataOfProduct[i].productDiscount) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}
