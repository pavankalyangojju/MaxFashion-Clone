// header form
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

// bodyPart

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
  // image.setAttribute("class", "img");
  image.setAttribute("src", ele.Image);

  var para = document.createElement("p");
  para.setAttribute("id", "catText");
  para.textContent = ele.text;

  specdiv.append(image, para);
  mainDiv.append(specdiv);
});
var landingtoProd = document.getElementsByClassName("img");
console.log(landingtoProd.length);

for (var i = 0; i < landingtoProd.length; i++)
  landingtoProd[i].addEventListener("click", function () {
    window.location.href = "product.html";
  });
