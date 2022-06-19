let arr=JSON.parse(localStorage.getItem("orProd")) || []
let orID = JSON.parse(localStorage.getItem("product_id"))
let delivery_Add  = JSON.parse(localStorage.getItem("delivery_address"));

arr.map(function(el){
    let box=document.createElement("div");
    box.setAttribute("id","mainbox")
    let box_name=document.createElement("div");
    let box_price=document.createElement("div");
    
    let P_name=document.createElement("p");
    // let p_id=document.createElement("p");
    let P_price=document.createElement("p");
    P_price.innerText=el.price
    // p_id.innerText="po22234449"
    P_name.innerHTML=el.title;
    P_name.style.color="#ff6f61"
    box_name.append(P_name)
    box_price.append(P_price)
    box.append(box_name, box_price)
    let container=document.getElementById("total_payabl");
    container.append(box)
})




var total = arr.reduce(function (sum, elem, index, arr) {
    
    return sum + Number(elem.price);
  }, 0);

  console.log(total);
   

// let total2=document.getElementById("price2");
// total2.innerText=total;

var total_pack = arr.reduce(function (sum, elem, index, arr) {
    
    return sum + Number(elem.price);
  }, 19);

//   let Total_payable=document.getElementById("price3");
//   Total_payable.innerText=total_pack

  let total1=document.getElementById("price");
total1.innerText=total_pack;


// ********* invoiceproduct id***************

  let box=document.createElement("div");
  box.setAttribute("id","mainbox")
  let box_name=document.createElement("div");
  let box_price=document.createElement("div");
  
  let order_details=document.createElement("h5");
  let P_idname=document.createElement("p");
  let p_order=document.createElement("p");
  let subtotal=document.createElement("p");
  let packaging=document.createElement("p");
  let Total_payable=document.createElement("p");
  
  


  let order_details_price=document.createElement("h3");
  let p_orderdate=document.createElement("p");
  let P_id=document.createElement("p");
  let subtotal_price=document.createElement("h6");
  let packaging_price=document.createElement("h6");
  let Total_payable_price=document.createElement("h6");

  order_details.innerText="order Details"
  P_idname.innerText="Oreder ID";
  p_order.innerText="Order Date";
  subtotal.innerText="Sub Total"
  packaging.innerText="Packaging charges"
  Total_payable="Total Payable"
  subtotal_price.innerText=total
  packaging_price.innerText="(+) ₹19"
  Total_payable_price.innerText=total_pack
  order_details_price.innerText="."


  P_id.innerHTML= orID;
  p_orderdate.innerText="june 5,2022"
 
  box_name.append(order_details,P_idname,p_order,subtotal,packaging,Total_payable)

  box_price.append(order_details_price,P_id,p_orderdate,subtotal_price,packaging_price,Total_payable_price)
  box.append(box_name, box_price)
  let container=document.getElementById("invoice_order");
  container.append(box)



// ***********address*******

  let mainbox=document.createElement("div");
  mainbox.setAttribute("id","mainbox")

let container1=document.getElementById("addrs");
container1.innerHTML = `

<p>Shipping Address:</p>
<p>${delivery_Add.name}</p>
<p>${delivery_Add.flat}</p>
<p>${delivery_Add.state} - ${delivery_Add.pincode}</p>
<p>Phone: ${delivery_Add.mobile}</p> 

`



// let date  = delivery_Add.date

// //  date  = date.split("-")
// console.log(date)  

