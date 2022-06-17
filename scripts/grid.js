let append=(data)=>{
    let cont=document.getElementById("firstleft")
    data.forEach((el)=>{
        let div = document.createElement("div")
        div.setAttribute("id","append_div")               
        let image = document.createElement("img")
        image.src=el.image;
        let h3 = document.createElement("h3")
        h3.innerText=el.title;
        let p =document.createElement("p")
        p.innerText=`el.type${ of }el.count`
        let div2 = document.createElement("div")
        let span1 = document.createElement("span")
        span1.innerText=`el.rate ${<i class="fa fa-star"></i>}`
        let span2 = document.createElement("span")
        span2.innerText=`el.total_ratings${ratings}`;
        div2.append(span1,span2)
        let div3 = document.createElement("div")
      let p1 = document.createElement("P")
      p1.innerText=el.price;
      let p2 = document.createElement("P")
      p2.innerText=el.off+"%"+"off"
      div3.append(p1,p2)
      let div4 =document.createElement("div4")
      let p3 = document.createElement("P")
      p3.innerText=Math.floor(el.price-((el.price*el.off)/100))
      let p4 = document.createElement("P")
      p4.setAttribute("id","addp")
      p4.innerText="Add"
      p4.addEventListener("click",clickme)
      div4.append(p3,p4)
      cont.append(image,h3,p,div2,div3,div4)
    })
}
