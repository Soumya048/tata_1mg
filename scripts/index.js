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



// import navbar
import topNavbar from "../components/navbar.js"
let nav = document.getElementById("prodnavbar")
nav.innerHTML = topNavbar()


//import footer  & appending footer 
import footerFun  from "../components/footer.js"
let footer = document.querySelector("#tata1mgFooter")
footer.innerHTML = footerFun();


let cityBox =  document.getElementById("location");

function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getCityName(latitude, longitude);
        console.log(latitude);
        console.log(longitude);
    }
}
getLocationWeather()

async function getCityName(lat, lon) {
    const apikey = "8811ba9db17ed04c19c500b61c2d03e0"
    console.log(lat);
    console.log(lon);

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`

    let res = await fetch(url)
    let data = await res.json(); 
    console.log(data.name)
    cityBox.value = data.name
    localStorage.setItem("userlocation", JSON.stringify(data.name));
}

getCityName()
// geo location end;




// pageTitle(
//   "Online Pharmacy India | Buy Medicines from India's Trusted Medicine Store: 1mg.com"
// );
// pageFavion();

// const dropDownNavbar = document.getElementById("dropDownNavbar");

// dropDownNavbar.innerHTML =

// dropDownNavbarEle().forEach((ele, ind) => {
//   // let fun = hiddenFunction[ind];

//   // ele.innerHTML = fun();

//   dropDownNavbar.append(ele);
// });




// const displayOne = (str,arr) => {
//   str.innerHTML = null;

// //   console.log(arr);
//   arr.forEach((ele, ind) => {
//     let card = document.createElement("div");
//     card.className = `style__container___39fE1`;

//     let a = document.createElement("a");

//     a.className = `style__anchor-style___1scP7`;

//     let imgCard = document.createElement("div");
//     imgCard.className = "style__image-container___2G57P";

//     let div = document.createElement("div");

//     let img = document.createElement("img");
//     img.src = ele.img;
//     img.classList = "style__image___Ny-Sa style__loaded___22epL";

//     div.appendChild(img);

//     imgCard.appendChild(div);

//     let name = document.createElement("div");
//     name.classList="style__card-head-name___3UuUt"
//     name.innerText = ele.name;

//     a.append(imgCard, name);

//     card.append(a);

//     str.append(card);
//   });
// };


// const displayTwo = (str,arr) => {
// //   console.log(arr);
//   str.innerHTML = null;

//   arr.forEach((ele, ind) => {
//     let card = document.createElement("div");
//     card.className = `style__container___39fE1`;

//     let a = document.createElement("a");

//     a.className = `style__anchor-style___1scP7`;

//     let imgCard = document.createElement("div");
//     imgCard.className = "style__image-container___2G57P";

//     let div = document.createElement("div");

//     let img = document.createElement("img");
//     img.src = ele.img;
//     img.classList = "style__image___Ny-Sa style__loaded___22epL";

//     div.appendChild(img);

//     imgCard.appendChild(div);

//     let name = document.createElement("div");
//     name.classList="style__card-head-name___3UuUt"
//     name.innerText = ele.name;

//     a.append(imgCard, name);

//     card.append(a);

//     str.append(card);
//   });
// };




// slide call






// console.log(footer);



// console.log(footerFun());

//  footerFun();