
let product_data = JSON.parse(localStorage.getItem("toShow"))

let cartArr = JSON.parse(localStorage.getItem("toCart")) || [];

// console.log(product_data)

let append = (data) => {
    document.title = data.title;
    let Tcontainer = document.getElementById("top_container");
    Tcontainer.innerHTML = null;
    let desTitle = document.getElementsByClassName("prodnameHere")
    desTitle[0].innerText = data.title
    desTitle[1].innerText = data.title

    document.getElementById("rating_here").innerText = data.rate;

    let image = data.image
    let title  = data.title
    let subTitle = data.subTitle;
    let price = data.price;
    let rate = data.rate;
    let count = data.count;
    let off = data.off;
    let unit = data.max_unit;
    let people = Math.floor(Math.random() * 3000);

    let discount_price = price - Math.floor(price*(off/100));




    Tcontainer.innerHTML = `
    
    <div id="productDiv" > 
    <div id="product_image">
        <img src="${image}" alt="">
    </div>
    <div id="product_data">
        <h3>${title}</h3>
        <p>${subTitle}</p>
        <div id="rating">${rate} <i class="fa-solid fa-star"></i></div>
        <div class="topM" id="pack">
            <h6>Pack Size</h6>
            <div>
                <h6>${count}</h6>
                <h6>₹${discount_price}</h6>
            </div>
        </div>

        <div class="topM" id="product_highlights">
            <h4 class="topM">Product highlights</h4>
            <p>&#8226; Contains 30 billion CFU plus with 14 live probiotic strains and prebiotic fibre</p>
            <p>&#8226; These capsules enhance the immune system</p>
            <p>&#8226; Helps in relieving gas and bloating</p>
            <p>&#8226; Non-GMO and no added preservatives</p>  
        </div>
    </div>
    <div id="product_Add">
        <div id="addSec_1">
            <div id="addbox_head"> <i class="fa-solid fa-chart-line"></i> ${people} people bought this recently</div>
            
            <form id="price_form" onsubmit="addToCart(addFirst, addSec, addinital)">
                <label class="checkbox_container">
                    <span>₹${discount_price}</span> 
                    <span id="mrp_price">₹${price}</span> 
                    <span id="Offspan">${off}%off</span>
                    <input id="ch1" type="radio" checked="checked" name="radio">
                    <span class="checkmark"></span>
                </label>
                <label class="checkbox_container"> 
                    <span>₹${discount_price}</span> 
                    <span id="c_plan">Care Plan</span> 
                    <span id="plan_ad">member price free shipping and 5% Extra NeuCoins</span>
                    <input id="ch2" type="radio" name="radio">
                    <span class="checkmark"></span>
                </label>

                <p class="mk_mGre">Inclusive of all taxes</p>
                <div>
                    <span> <select  id="qty_box">

                        </select>
                        <span>of <span>${count}</span></span>
                    </span>
                </div>
                <div id="subDiv">
                    <i id="chMark" class="fa-solid fa-check"></i>
                    <input id="submit" type="submit" value="ADD TO CART">
                </div>
                
            </form>
        </div>
        <div id="addSec_2">
            <div>
                <img src="https://tpc.googlesyndication.com/simgad/14435765670303656440" alt="">
            </div>
            <div id="add_offer">
                <div id="abs_offer">
                    Additional offers
                </div>
                <div>
                    <i class="fa-solid fa-tag fa-2x"></i>
                </div>
                <div>
                    <p><span class="mk_bold ">Paytm Postpaid | Wallet: </span>Pay with Paytm and get up to ₹300 cashback on orders of ₹600 and more. Offer ends 30th June 2022.</p>
                </div>
                <div id="showmoreTag">
                    <p>Show More</p> <span><i class="fa-solid fa-caret-down fa-2x"></i></span>
                    
                </div>
            </div>
        </div>
    </div>
</div>
    
    `

    let selectTag = document.getElementById("qty_box")
    if(unit) {
        for(let i  = 0; i < Number(unit); i++) {
            let option = document.createElement("option")
            let add = data.type
            option.setAttribute("value", i+1)
            if(i !== 0) {
                add = data.type+"s" 
            }
            option.innerText = `${i+1} ${add}`

            selectTag.append (option)
        }
    }
}

append(product_data);


let submitBtn = document.getElementById("submit");

let addFirst = () => {
    submitBtn.value =  "ADDING.."
}
let addSec = () => {
    document.getElementById("chMark").style.display = "block"
    submitBtn.value = "ADDED"
}
let addinital = () => {
    document.getElementById("chMark").style.display = "none"
    submitBtn.value =  "ADD TO CART"
}



// function addToCart


let cartDataArr = JSON.parse(localStorage.getItem("toCart")) || []

let addToCart = (func1, func2, func3) => {
    event.preventDefault()
    
    func1();

    setTimeout(function () {
        func2()
    }, 3000)
    setTimeout(function () {
        func3()
    }, 5000)



    let checkedPlan = document.getElementById('ch2').checked;

    if(checkedPlan) {
        localStorage.setItem("carPlan", JSON.stringify("true"))
    }
    else {
        localStorage.setItem("carPlan", JSON.stringify("false"))
    }
    

    let selected_quant = Number(document.getElementById("qty_box").value);
    
    if(cartArr.length !== 0) {
        cartArr.forEach(cIteams => {
            if(cIteams.id == product_data.id) {
                cIteams.quantity =  Number(cIteams.quantity + selected_quant);
                localStorage.setItem("toCart", JSON.stringify(cartArr))
                alert("Increased Iteam Quantity")
            }
        })
    }
    else {
        if(selected_quant !== 1) {
            product_data.quantity = Number(product_data.quantity + selected_quant);
        }
        cartArr.push(product_data)
        localStorage.setItem("toCart", JSON.stringify(cartArr))
    }
}



