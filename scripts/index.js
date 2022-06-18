import { pageTitle, pageFavion } from "../components/title.js";
// import { healthResourceCenter,covidEssentials,featured,vitaminsNutrition,diabetes,healthcareDevices,personalCare,healthConditions,ayurvedaProducts,homeopathy } from "../components/navBox.js";

import dropDownNavbarEle from "../components/dropDownNavbar.js";

// landing page work
import {
  featuredBrandsOne,
  featuredBrandsTwo,
  popularCategoriesOne,
  popularCategoriesTwo,


} from "../components/landingPageData.js";

pageTitle(
  "Online Pharmacy India | Buy Medicines from India's Trusted Medicine Store: 1mg.com"
);
pageFavion();

const dropDownNavbar = document.getElementById("dropDownNavbar");

// dropDownNavbar.innerHTML =

dropDownNavbarEle().forEach((ele, ind) => {
  // let fun = hiddenFunction[ind];

  // ele.innerHTML = fun();

  dropDownNavbar.append(ele);
});

//  let featuredBrands =[
//     {
//         img: "https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1655447476/kkpsr5tdl5bsc16ymrlt.jpg",
//         name:`Baidyanath(Nagpur)`,
//     },

//     {
//         img: "https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1655447476/kkpsr5tdl5bsc16ymrlt.jpg",
//         name:`Baidyanath(Nagpur)`,
//     },

//  ]


const displayOne = (str,arr) => {
  str.innerHTML = null;

//   console.log(arr);
  arr.forEach((ele, ind) => {
    let card = document.createElement("div");
    card.className = `style__container___39fE1`;

    let a = document.createElement("a");

    a.className = `style__anchor-style___1scP7`;

    let imgCard = document.createElement("div");
    imgCard.className = "style__image-container___2G57P";

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.img;
    img.classList = "style__image___Ny-Sa style__loaded___22epL";

    div.appendChild(img);

    imgCard.appendChild(div);

    let name = document.createElement("div");
    name.classList="style__card-head-name___3UuUt"
    name.innerText = ele.name;

    a.append(imgCard, name);

    card.append(a);

    str.append(card);
  });
};


const displayTwo = (str,arr) => {
//   console.log(arr);
  str.innerHTML = null;

  arr.forEach((ele, ind) => {
    let card = document.createElement("div");
    card.className = `style__container___39fE1`;

    let a = document.createElement("a");

    a.className = `style__anchor-style___1scP7`;

    let imgCard = document.createElement("div");
    imgCard.className = "style__image-container___2G57P";

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.img;
    img.classList = "style__image___Ny-Sa style__loaded___22epL";

    div.appendChild(img);

    imgCard.appendChild(div);

    let name = document.createElement("div");
    name.classList="style__card-head-name___3UuUt"
    name.innerText = ele.name;

    a.append(imgCard, name);

    card.append(a);

    str.append(card);
  });
};

// console.log(featuredBrandsOne,featuredBrandsTwo);

let oneOne = document.querySelector("#oneOne");
displayOne(oneOne,featuredBrandsOne);

let oneTwo = document.querySelector("#oneTwo");
displayTwo( oneTwo,featuredBrandsTwo);


let twoOne = document.querySelector("#twoOne");
displayOne(twoOne,popularCategoriesOne);

let twoTwo = document.querySelector("#twoTwo");
displayTwo( twoTwo,popularCategoriesTwo);


