import {
  healthResourceCenter,
  covidEssentials,
  featured,
  vitaminsNutrition,
  diabetes,
  healthcareDevices,
  personalCare,
  healthConditions,
  ayurvedaProducts,
  homeopathy,
} from "../components/navBox.js";

let dropDownArr = new Array(10);

let hiddenFunction = new Array(10);
hiddenFunction = [
  healthResourceCenter(),
  covidEssentials(),
  featured(),
  vitaminsNutrition(),
  diabetes(),
  healthcareDevices(),
  personalCare(),
  healthConditions(),
  ayurvedaProducts(),
  homeopathy(),
];

dropDownArr = [
  "Health Resource Center",
  "covid essentials",
  "featured",
  "vitamins & nutrition",
  "diabetes",
  "healthcare devices",
  "personal care",
  "health conditions",
  "ayurveda products",
  "homeopathy",
];

// event's

const myDisplay=(ind)=>{

    let ele = document.getElementById(`hiddenId${ind}`);

    if(ele.style.visibility ==="hidden"){

        ele.style.visibility ="visible"
    }else{
            ele.style.visibility ="hidden";      
    }


}


const dropDownNavbarEle = () => {
  let arr = dropDownArr.map((ele, ind) => {
    let el = document.createElement("div");
    el.className = "dropDownNavbarDiv";
    el.id = `dropDownNavbarDiv${ind+1}`;
    // el.style.border = "2px solid red";


    el.addEventListener("mouseover", ()=>{
        myDisplay(ind+1);
    })

    el.addEventListener("mouseout", ()=>{


        myDisplay(ind+1);


    })




    let p = document.createElement("p");
    p.innerText = ele;
    let span = document.createElement("span");
    span.className = "material-symbols-outlined";
    span.innerText = `expand_more`;
    // el.innerHTML = hiddenFunction[ind]

    let div = document.createElement("div");
    div.classList = "hidden";
    div.id = `hiddenId${ind + 1}`;
    div.style.zIndex =`10000${ind+1}`;
    // div.innerHTML = healthResourceCenter();
    div.innerHTML = hiddenFunction[ind];
    // div.style.display = "none";
    div.style.visibility ="hidden";


    

    // console.log(div);
    el.append(p, span, div);
    // console.log(el);
    return el;
  });

  // console.log(arr);

  return arr;
};

export default dropDownNavbarEle;
