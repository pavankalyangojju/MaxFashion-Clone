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
    produPrice: "599",
    prodDesc: "MAX Textured Round Neck Sweatshirt",
    productcolor: "pink",
    producttype: "pullover",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "Max300",
    productDiscount: "40",

    productsize: "M",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010756375-Blue-Malibu-1000010756375-11112021_01-2100.jpg",
    produPrice: "999",
    prodDesc: "MAX Solid Hooded Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "Max300",
    productDiscount: "10",
    productsize: "S",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010682861-Pink-Candypink-1000010682861-9222021_01-2100.jpg",
    produPrice: "1999",
    prodDesc: "MAX Solid Full Sleeves Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "sale",
    productDiscount: "40",
    productsize: "L",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010742415-Blue-Blue-1000010742415-11042021_01-2100.jpg",
    produPrice: "799",
    prodDesc: "MAX Textured Ribbed Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "color blocked",
    productSleveLength: "full sleves",
    Browse: "new",
    productpromotions: "sale",
    productDiscount: "40",
    productsize: "XL",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010410362-Purple-Mauve-1000010410362-7292021_01-2100.jpg",
    produPrice: "999",
    prodDesc: "MAX Textured Hooded Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "M",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010544891-Purple-Lavender-1000010544891-9292021_01-2100.jpg",
    produPrice: "699",
    prodDesc: "MAX Textured Mock Collar Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "textured",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "S",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010541877-Pink-Blush-1000010541877-9152021_01-2100.jpg",
    produPrice: "599",
    prodDesc: "MAX Printed Round Neck Fit Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "printed",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "60",
    productsize: "L",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010503266-Blue-Aqua-1000010503266-11232021_01-2100.jpg",
    produPrice: "599",
    prodDesc: "MAX Printed Round Neck Sweatshirt",
    productcolor: "blue",
    producttype: "Hoddie",
    productdesgine: "printed",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "20",
    productsize: "XL",
  },

  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010682836-Blue-Lightblue-1000010682836-9222021_01-2100.jpg",
    produPrice: "999",
    prodDesc: "MAX Printed Round Neck Sweatshirt",
    productcolor: "blue",
    producttype: "hoddie",
    productdesgine: "jacquard",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "70",
    productsize: "M",
  },

  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010773077-Green-Oliveg-1000010773077-10202021_01-2100.jpg",
    produPrice: "449",
    prodDesc: "MAX Printed Round Sweatshirt",
    productcolor: "green",
    producttype: "hoddie",
    productdesgine: "jacquard",
    productSleveLength: "full sleves",
    Browse: "online only",
    productpromotions: "Max300",
    productDiscount: "80",
    productsize: "S",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009224156-Pink-Blush-1000009224156-10182020_01-2100.jpg",
    produPrice: "450",
    prodDesc: "MAX Printed Hooded Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "printed",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "Max300",
    productDiscount: "50",
    productsize: "L",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010605412-Purple-Purple-1000010605412-9222021_01-2100.jpg",
    produPrice: "999",
    prodDesc: "MAX Textured Hooded Zip Sweatshirt",
    productcolor: "purple",
    producttype: "front open",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "Max300",
    productDiscount: "60",
    productsize: "XL",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010503370-Pink-Peachapct-1000010503370-11302021_02-2100.jpg",
    produPrice: "999",
    prodDesc: "MAX Embellished Round Neck Sweatshirt",
    productcolor: "pink",
    producttype: "hoodie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "M",
  },
  {
    proudimg:
      "https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010615711-Beige-Oatmarl-1000010615711-9152021_02-2100.jpg",
    produPrice: "1000",
    prodDesc: "MAX Printed Full Sleeves Sweatshirt",
    productcolor: "white",
    producttype: "hoodie",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "S",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009311972-Grey-Greymel-1000009311972-9032020_01-2100.jpg",
    produPrice: "350",
    prodDesc: "MAX Typgraphic Full Sleeves Sweatshirt",
    productcolor: "pink",
    producttype: "front open",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "L",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009311806-Yellow-Yellow-1000009311806-11022020_01-2100.jpg",
    produPrice: "475",
    prodDesc: "MAX Solid Full Sleeves Sweatshirt",
    productcolor: "yellow",
    producttype: "pullover",
    productdesgine: "solid",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "XXL",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010468539-Black-Black-1000010468539-9152021_01-2100.jpg",
    produPrice: "599",
    prodDesc: "MAX Printed regular fit Sweatshirt",
    productcolor: "White",
    producttype: "pullover",
    productdesgine: "solid",
    productSleveLength: "half sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "M",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010642197-Beige-Oatmarl-1000010642197-10202021_01-2100.jpg",
    produPrice: "449",
    prodDesc: "MAX Printed Round Neck Sweatshirt",
    productcolor: "white",
    producttype: "front open",
    productdesgine: "printed",
    productSleveLength: "half sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "S",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010694522-Black-Black-1000010694522-10202021_01-2100.jpg",
    produPrice: "699",
    prodDesc: "MAX Colorblocked High-Neck Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "printed",
    productSleveLength: "half sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "L",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010504181-Grey-Greymel-1000010504181-9012021_01-2100.jpg",
    produPrice: "899",
    prodDesc: "MAX Solid Hooded Sweatshirt",
    productcolor: "white",
    producttype: "front open",
    productdesgine: "texture",
    productSleveLength: "full sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
    productsize: "XXL",
  },

  //  FOOTER SECTION
];
displayItems(dataOfProduct);
var mybasketarray = JSON.parse(localStorage.getItem("storecarts")) || [];

function displayItems(product) {
  document.querySelector("#allProduct").textContent = "";

  var count = document.querySelector("#countProduct");
  var ProductTotal = product.length;
  count.textContent = ProductTotal + " " + "Products";

  product.map(function (ele) {
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

    productbutton.addEventListener("click", gotocarts);

    function gotocarts() {
      console.log("here");
      mybasketarray.push(ele);
      localStorage.setItem("storecarts", JSON.stringify(mybasketarray));
    }

    productDiv.append(productImg, proudprice, prouddescription, productbutton);
    appenddiv.append(productDiv);
  });
}
console.log(mybasketarray);

//  FOOTER SECTION
//  FOOTER SECTION

//  FOOTER SECTION

// Vineeth part
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

function designarr() {
  var sortedarr = [];
  var type = document.querySelector("#design").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (type == dataOfProduct[i].productdesgine) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  console.log("here");
  displayItems(sortedarr);
}

function colorarr() {
  var sortedarr = [];
  var color = document.querySelector("#color").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (color == dataOfProduct[i].productcolor) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function sleevearr() {
  var sortedarr = [];
  var sleeve = document.querySelector("#sleeve").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (sleeve == dataOfProduct[i].productSleveLength) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function browsearr() {
  var sortedarr = [];
  var browse = document.querySelector("#browse").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (browse == dataOfProduct[i].Browse) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

function promotionsarr() {
  var sortedarr = [];
  var browse = document.querySelector("#promotions").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (browse == dataOfProduct[i].productpromotions) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}
function discountarr() {
  var sortedarr = [];
  var browse = document.querySelector("#discount").value;
  for (var i = 0; i < dataOfProduct.length; i++) {
    if (browse == dataOfProduct[i].productDiscount) {
      sortedarr.push(dataOfProduct[i]);
    }
  }
  displayItems(sortedarr);
}

document.querySelector(".b").addEventListener("click", basketgo);

function basketgo() {
  window.location.href = "cart.html";
}

// hovering by srinidhi

//TOPS..............................
function functionTodisplay() {
  document.querySelector(".mainDivgrid").style.display = "block";
  document.querySelector(".mainDivgrid").style.display = "flex";
}

function functionNotdisplay() {
  document.querySelector(".mainDivgrid").style.display = "none";
}

//BOTTOMS.............................
function functionTodisplay1() {
  document.querySelector(".mainDivgridT").style.display = "block";
  document.querySelector(".mainDivgridT").style.display = "flex";
}

function functionNotdisplay1() {
  document.querySelector(".mainDivgridT").style.display = "none";
}

//JUMPSUITS.................................

function functionTodisplay2() {
  document.querySelector(".mainDivgridTh").style.display = "block";
  document.querySelector(".mainDivgridTh").style.display = "flex";
}

function functionNotdisplay2() {
  document.querySelector(".mainDivgridTh").style.display = "none";
}

// SLEEPWEAR..............................

function functionTodisplay3() {
  document.querySelector(".mainDivgridf").style.display = "block";
  document.querySelector(".mainDivgridf").style.display = "flex";
}

function functionNotdisplay3() {
  document.querySelector(".mainDivgridf").style.display = "none";
}

//INDIAN WEAR..................
function functionTodisplay4() {
  document.querySelector(".mainDivgridfi").style.display = "block";
  document.querySelector(".mainDivgridfi").style.display = "flex";
}

function functionNotdisplay4() {
  document.querySelector(".mainDivgridfi").style.display = "none";
}

//sports wear

function functionTodisplay5() {
  document.querySelector(".mainDivgrids").style.display = "block";
  document.querySelector(".mainDivgrids").style.display = "flex";
}

function functionNotdisplay5() {
  document.querySelector(".mainDivgrids").style.display = "none";
}

//Lingeri

function functionTodisplay6() {
  document.querySelector(".mainDivgridse").style.display = "block";
  document.querySelector(".mainDivgridse").style.display = "flex";
}

function functionNotdisplay6() {
  document.querySelector(".mainDivgridse").style.display = "none";
}
//accessoreis

function functionTodisplay7() {
  document.querySelector(".mainDivgrid1").style.display = "block";
  document.querySelector(".mainDivgrid1").style.display = "flex";
}

function functionNotdisplay7() {
  document.querySelector(".mainDivgrid1").style.display = "none";
}

// footwear
function functionTodisplay8() {
  document.querySelector(".mainDivgrid2").style.display = "block";
  document.querySelector(".mainDivgrid2").style.display = "flex";
}

function functionNotdisplay8() {
  document.querySelector(".mainDivgrid2").style.display = "none";
}

// winter

function functionTodisplay9() {
  document.querySelector(".mainDivgrid3").style.display = "block";
  document.querySelector(".mainDivgrid3").style.display = "flex";
}

function functionNotdisplay9() {
  document.querySelector(".mainDivgrid3").style.display = "none";
}
// more
function functionTodisplay0() {
  document.querySelector(".mainDivgrid4").style.display = "block";
  document.querySelector(".mainDivgrid4").style.display = "flex";
}

function functionNotdisplay0() {
  document.querySelector(".mainDivgrid4").style.display = "none";
}

// hovering end by srinidhi

// var onclickProduct = document.getElementById("b");
// onclickProduct.addEventListener("click", function () {
//   window.location.href = "magendra.html";
// });
