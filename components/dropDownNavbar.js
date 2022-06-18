
import { healthResourceCenter,covidEssentials,featured,vitaminsNutrition,diabetes,healthcareDevices,personalCare,healthConditions,ayurvedaProducts,homeopathy } from "../components/navBox.js";


let dropDownArr = new Array(10);

let hiddenFunction = new Array(10);
hiddenFunction=[
    healthResourceCenter(),
    covidEssentials(),
    featured(),
    vitaminsNutrition(),
    diabetes(),
    healthcareDevices(),
    personalCare(),
    healthConditions(),
    ayurvedaProducts(),
    homeopathy()
]

dropDownArr = ["Health Resource Center",
                "covid essentials",
                "featured",
                "vitamins & nutrition",
                "diabetes",
                "healthcare devices",
                "personal care",
                "health conditions",
                "ayurveda products",
                "homeopathy"
            ]

            const myDisplayFun =(ele)=>{

                ele.style.display = "block";
                // console.log(ele);
                // let el = document.getElementById("navOne");

                // el.style.display = "none";
            }


           const  myDisplayNoneFun = (ele)=>{

            ele.style.display = "none";
            // console.log(ele.innerText);
           }

     const dropDownNavbarEle =()=>{

             let arr =   dropDownArr.map((ele,ind)=>{
                    let el = document.createElement("div"); 
                    el.className = "dropDownNavbarDiv"

                    let p = document.createElement("p");
                    p.innerText = ele;
                    p.style.border ="2px solid red";
                    let span = document.createElement("span");
                    span.className = "material-symbols-outlined"
                    span.innerText = `expand_more`
                    // el.innerHTML = hiddenFunction[ind]

                let div = document.createElement("div"); 
                div.className ="hidden"   
                    // div.innerHTML = healthResourceCenter();
                    div.innerHTML =  hiddenFunction[ind]
                    // div.append()  
                    div.style.display = "none" 

                        p.addEventListener("mouseover", ()=>{
                            myDisplayFun(div);
                        })

                        div.addEventListener("mouseleave",()=>{

                            myDisplayNoneFun(div);
                        })

                    // console.log(div);
                    el.append(p,span,div);
                    // console.log(el);
                    return el
                })

                // console.log(arr);

                return arr;
            }

export default dropDownNavbarEle;