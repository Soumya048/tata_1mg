let arr=JSON.parse(localStorage.getItem("Products")) || []

arr.map(function(el){
    let box=document.createElement("div");
    box.setAttribute("id","mainbox")
    let box_name=document.createElement("div");
    let box_price=document.createElement("div");
    let P_orderId=document.createElement("p");
    P_orderId.innerText="Order ID"
    let P_name=document.createElement("p");
    let P_price=document.createElement("p");
    P_price.innerText="P0164222429203631"
    P_name.innerHTML=el.name;
    box_name.append(P_orderId,P_name)
    box_price.append(P_price)
    box.append(box_name, box_price)
    let container=document.getElementById("orde_id");
    container.append(box)
})