

 export const pageTitle = (str)=>{

    document.title = str;
}

 export const pageFavion = (str)=>{

    let link = document.getElementById("favicon");
    
    link.href = "./images/faviconRebrand.ico"
        
    }
