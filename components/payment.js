function payment1(){
    return `
    <div id="payment_box">
    <h3><img id="payment_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJkTWYSFdYxnxPs3Ql0rG1Jgi7FrPlxS1_w&usqp=CAU">paytm postpaid | wallet</h3>
    <p>pay with paytm and get up ₹200 cashback on order of ₹600 and more.<br>offer ends on 30th july</p>
    <h4>LINK WALLET</h4>
</div>
<div id="payment_box">
    <h3><img id="payment_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSSGXB9XpZk7jf8xFJTdwu_iWXGd-MyvGGQ&usqp=CAU"></h3>
    <p>pay with amazon pay and get up 20% cashback on order of ₹500 on all medicines .offer ends on 25th july</p>
    <h4>LINK WALLET</h4>
</div>
<div id="payment_box">
    <h3><img id="payment_logo" style="height: 50px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDIvwfJNKTuZKpLCIjIvSH5N1abtMxw519g&usqp=CAU"></h3>
    <p>pay with mobikwik and get up ₹100 cashback on order of ₹500 of cashback on allopathy medicines.offer ends on 30th july</p>
    <h4>LINK WALLET</h4>
</div>
    `;
}

function paymnet_upi(){
    return `
    <h3 style="margin-left:8%">Transfer money from your bank account using your UPI app</h3>
    <div style="display: flex; margin-top: 8%;">
        <h3 id="upi_para1">we accept</h3>
        <img id="upi_img" src="https://cdn-images-1.medium.com/fit/t/1600/480/0*BIy_CblCTVoOl5Zg">
    </div>
    <hr style="width: 80%;">
    <h3 style="margin-left:15%;margin-top: 20%;color: gray;">SAVED UPI</h3>
    <p style="margin-left:15%;margin-top: 5%;color: green;">pay with new UPI ID</p>
    <input type="text" placeholder="Ex:mobilenumber@upi" id="upi_payment">
    <button id="verify_upi" >verify and pay</button>
    `;
}
function payment_card(){
    return `
    <h3 style="margin-left: 10%;margin-top: 5%;">credit & Debit cards</h3>
    <p style="margin-left: 10%;margin-top: 5%;color: grey;">add new cards for payments</p>
    <p style="margin-left: 10%;margin-top: 10%;color: grey;">card number</p>
    <input type="number" placeholder="XXXX XXXX XXXX XXXX" id="card_num">
    <p style="margin-left: 10%;margin-top: 10%;color: grey;">expiry date</p>
    <input type="number" placeholder="MM" id="expiry_num" >
    <p style="display: inline;">//</p>
    <input type="number" placeholder="YY" id="expiry_num_yy">
    <p style="margin-left: 10%;margin-top:5%;color: grey;">security code</p>
    <input type="number" placeholder="CVV" id="cvv_num" style="display: block;">

    <input type="number" placeholder="name on card" id="card_name" style="display: block;">
    <button id="card_payment" ">MAKE PAYMENT</button>

    `
}
function cod_payment(){
    return `
    <input type="radio"  name="add" value="home" class="radio_data"  style="margin-top: 10%;margin-left: 5%;">
                <label for="home" style="font-size:20px;">cash on delivery</label>

                <button id="cod_payment" class="payment_continue">MAKE PAYMENT</button>
    `
}
export  {payment1,paymnet_upi,payment_card,cod_payment}