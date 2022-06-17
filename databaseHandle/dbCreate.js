let showcount = document.getElementById("displayData")
async function getData() {
    let url = "http://127.0.0.1:5001/api/products"
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        getCount(data)
        
}
getData()

let getCount = (prodArr) => {
    showcount.innerText =`Total Iteams:- ${prodArr.length}`; 
}


// store in database
async function addProduct() {
    event.preventDefault()
    const data = {
        id: Number(document.getElementById("id").value),
        title: document.getElementById("title").value,
        subTitle: document.getElementById("subTitle").value,
        price: Number(document.getElementById("price").value),
        category: document.getElementById("category").value,
        type: document.getElementById("type").value,
        image: document.getElementById("imgUrl").value,
        rate: Number(document.getElementById("rate").value),
        count: document.getElementById("count").value,
        off: Number(document.getElementById("discount").value),
        quantity: 1,
        max_unit: Number(document.getElementById("max_unit").value)
    }

    let response  = await fetch('http://127.0.0.1:5001/api/products', {
        method: "POST",
        body: JSON.stringify(data),
        headers:  {"Content-Type": "application/json"},
    })

    let dat = await response.json(); 
    console.log("dat:", dat);
}


// delete data;

async function deleteProduct() {
    let id  = document.getElementById("delete_id").value;

    if (id != "") {
        let response = await fetch(`http://localhost:5001/api/products/${id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
        })

        let dat = await response.json();
        console.log("dat:", dat);
    }
}