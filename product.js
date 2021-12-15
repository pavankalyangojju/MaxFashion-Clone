//  HEADER  SECTION

//  SORTING SECTION

//  PRODUCT DISPLAY SECTION here
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
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010410412-Pink-Pink-1000010410412-9292021_01-2100.jpg",
    produPrice: "₹999",
    prodDesc: "MAX Textured Round Neck Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "solid",
    productSleveLength: "full sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010504391-Green-Sage-1000010504391-9222021_01-2100.jpg",
    produPrice: "₹559",
    prodDesc: "MAX Polka Dot Round Neck Sweatshirt ",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "solid",
    productSleveLength: "half sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010694509-Pink-Blush-1000010694509-10132021_01-2100.jpg",
    produPrice: "₹1049",
    prodDesc: "MAX Printed Hooded Sweatshirt",
    productcolor: "pink",
    producttype: "hoddie",
    productdesgine: "printed",
    productSleveLength: "full sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009533017-Grey-Greymel-1000009533017-10262020_01-2100.jpg",
    produPrice: "₹275",
    prodDesc: "MAX Typographic Full Sleeves Sweatshirt",
    productcolor: "white",
    producttype: "hoddie",
    productdesgine: "printed",
    productSleveLength: "full sleves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009488854-Blue-Blue-1000009488854-11022020_01-2100.jpg",
    produPrice: "₹275",
    prodDesc: "MAX Printed Full-Sleeves Sweatshirt",
    productcolor: "blue",
    producttype: "front open",
    productdesgine: "solid",
    productSleveLength: "full sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009311342-Grey-Greymel-1000009311342-9302020_01-2100.jpg",
    produPrice: "₹500",
    prodDesc: "MAX Typographic Print Zip-Front Hoodie",
    productcolor: "white",
    producttype: "front open",
    productdesgine: "solid",
    productSleveLength: "half sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000009224206-Blue-Blue-1000009224206-9302020_01-2100.jpg",
    produPrice: "₹450",
    prodDesc: "MAX Printed Round Neck Sweatshirt",
    productcolor: "blue",
    producttype: "front open",
    productdesgine: "solid",
    productSleveLength: "half sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010410337-Blue-Blue-1000010410337-10072021_01-2100.jpg",
    produPrice: "₹999",
    prodDesc: "MAX Textured Sweatshirt",
    productcolor: "purple",
    producttype: "front open",
    productdesgine: "texture",
    productSleveLength: "full sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010410487-Beige-Beige-1000010410487-9222021_01-2100.jpg",
    produPrice: "₹999",
    prodDesc: "MAX Embellished Round Neck Sweatshirt",
    productcolor: "white",
    producttype: "round neck",
    productdesgine: "solid",
    productSleveLength: "half sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010742415-Pink-Blush-1000010742415-10132021_01-2100.jpg",
    produPrice: "₹799",
    prodDesc: "MAX Textured High Neck Sweatshirt",
    productcolor: "pink",
    producttype: "pullover",
    productdesgine: "solid",
    productSleveLength: "full sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010600295-Black-Black-1000010600295-9222021_01-2100.jpg",
    produPrice: "₹629",
    prodDesc: "MAX Printed Hooded Sweatshirt",
    productcolor: "pink",
    producttype: "huddie",
    productdesgine: "solid",
    productSleveLength: "full sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
  },
  {
    proudimg:
      "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010504391-Blue-Navy-1000010504391-9222021_01-2100.jpg",
    produPrice: "₹559",
    prodDesc: "MAX Polka Dot Round Neck Sweatshirt",
    productcolor: "blue",
    producttype: "front open",
    productdesgine: "textured",
    productSleveLength: "half sleeves",
    Browse: "sale",
    productpromotions: "sale",
    productDiscount: "60",
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
