function topNavbar() {
    return `
    
        <div id="navbar">
        <div id="navbarfirst">
            <div id="first">
            <a href="index.html"><img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt=""></a>
            </div>
            <div id="second">
                MEDICINES
            </div>
        <div id="third">
            <div id="first">
                LAB TESTS
            </div>
            <div id="second">
                SAFE
            </div>
        </div>
        <div id="fourth">
            CONSULT DOCTORS
        </div>

        <div id="fifth">
            COVID 19
        </div>
        <div id="sixth">
            AYURVEDA
        </div>
        <div id="seventh">
            <div id="first">
                CARE PLAN
            </div>
            <div id="second">
                SAVE MORE
            </div>

        </div>
            </div>


        <div id="navbarsecond">
            <div id="first">
                <a href="signup.html"><i class="material-icons">person</i></a>
                
            </div>
            <div id="second">
                offers
            </div>
            <div id="third">
                <a href="cart.html"><i id="shopping_bag" class="material-icons">shopping_cart </i></a>
            </div>
            <div id="fourth">
            <a href="Myorder.html">My Orders</a>
            </div>
            </div>
        </div>

    <!-- second navbar part -->


    <div id="secondnavbar">
        <div id="right">
        <div id="first">
            <i class="fa-solid fa-location-dot" style="font-size: 10px" ></i>
            <input type="text" name="" id="location">
            <i class="material-icons" style="font-size: 15px; color:rgb(153, 152, 152)">my_location</i>

        </div>
        <div id="second">
            <input type="text" id="searchproduct" oninput="debounceFunction(main, 1000)"  placeholder="Search for Medicines and Health Products">
            

            <div id="logodiv">
                <i class="fa fa-search"style="font-size:12px;"></i>
            </div>

        </div>
    </div>


    <div id="left">
        <div>
            <i class="material-icons" style="font-size: 17px;margin-top: 3px;color: purple;">bolt</i>
        </div>
        <p>
            QUICK BUY! Get 25% off on medicines*

        </p>
        <div id="qodiv">
            Quick order
        </div>

    </div>
    </div>


    <!-- third navbar part -->
    <div id="mainthird">
    <div id="thirdnavbar">
        <div id="first">
            <a href="products_page.html"><p>Health Resource Center</p></a>
            <i class="material-icons" style="font-size: 16px; margin-top:5px">expand_more</i>
        </div>
        <div id="first">
            <a href="products_page.html"><p>Covid Essentials</p></a>
            
            <i class="material-icons" style="font-size: 16px; margin-top:5px">expand_more</i>
        </div>
        <div id="first">
            <a href="products_page.html"><p>Featured</p></a>
            
            <i class="material-icons" style="font-size: 16px; margin-top:5px">expand_more</i>
        </div>
        <div id="first">
            <a href="products_page.html"><p>Vitamins & Nutrition</p></a>
            
            <i class="material-icons" style="font-size: 16px; margin-top:5px">expand_more</i>
        </div>
        <div id="first">
            <a href="products_page.html"><p>Diabetes</p></a>
            
            <i class="material-icons" style="font-size: 16px; margin-top:5px">expand_more</i>
        </div>
        <div id="first">
        <a href="products_page.html"><p>Healthcare Devices</p></a>
            
            <i class="material-icons" style="font-size: 16px; margin-top:5px">expand_more</i>
        </div>
        <div id="first">
        <a href="products_page.html"><p>Personal Care</p></a>
            
            <i class="material-icons" style="font-size: 16px; margin-top:5px">expand_more</i>
        </div>
        <div id="first">
            <a href="products_page.html"><p>Health Conditions</p></a>
            
            <i class="material-icons" style="font-size: 16px; margin-top:5px">expand_more</i>
        </div>
        <div id="first">
            <a href="products_page.html"><p>Ayurveda Products</p></a>
            <i class="material-icons" style="font-size: 16px; margin-top:5px">expand_more</i>
        </div>
    </div>
    <div id="first">
        <a style="color: black ;" href="products_page.html"><p>Homeopathy</p></a>
        
        <i class="material-icons" style="font-size: 16px; margin-top:5px">expand_more</i>
    </div>

    </div>
    
    
    `
}

export default topNavbar