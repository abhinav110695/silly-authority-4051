let navbar =()=>{
    return `<a id="logo" href="#"><img id="licious_logo" src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="licious"></a>
        
    <div id="#">
    
        <!-- location tag -->
        <select name="location" id="tag">
            <option value="delhi"></option>
                <option value="delhi">Delhi</option>
                <option value="Hyder">Hyderabad</option>
                <option value="Bang">Bangalore</option>
        </select>
        
            <img id="location_logo" src="https://www.licious.in/img/rebranding/location_icon.svg" alt="location_logo">
    </div>
    
    
    <!-- search tag -->
        <input  id="search_bar" type="text" placeholder="Search  For Any Delicious Product">
    
        <!-- categories part  -->
        <!-- dropdown menu part  -->
        
        <div id="cate">
          
            <img id="cat" src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" alt="category">
            
            <!-- <p>Categories</p> -->
            <div class="dropdown">
                <p class="dropbtn">Categories
                  
                </p>
                <div class="dropdown-content">
                    <a href="#"> <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/539819fa-f8f5-6148-d407-95522fa17a28/original/Todays-deal21.png" alt="top">Today's Deals </a>
                    <a href="#"> <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/479a9750-d9a2-33ff-0693-3044a9dcae91/original/Chicken.png" alt="chicken">Chicken</a>
                    <a href="#"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/46494180-ff34-2236-4240-da12222c4d23/original/Fish___Seafood.png" alt="fish">Fish & SeaFood</a>
                    <a href="#"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/952cc910-319c-0b5d-fa34-373f05f0917a/original/Mutton.png" alt="mutton">Mutton</a>
                    <a href="#"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0a8c4f08-15e7-12e5-a696-286cddadf373/original/RTC_(2).png" alt="cook">Ready To Cook</a>
                    <a href="#"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b528b5d9-aae1-8814-99d5-8642e2ee3676/original/Prawns.png" alt="">Prawns</a>
                    <a href="#"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d08157a7-8828-4978-eb3f-3408cfe7d1f9/original/Venus_(1).png" alt="coldcuts">Cold Cuts</a>
                    <a href="#"><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/066b2145-5678-c1c6-5a05-5e5e53840101/original/Continental-egg-spread.png" alt="spreads">Spreads</a>
                    <a href="#"> <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/54771c04-5aae-094d-8739-b22d09ab284e/original/Eggs.png" alt="egg">  Eggs</a>
                </div>
              </div>
           </div> 
    
    
           <!-- login part -->
           <div id="cs_login">
            <img id="account" src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="account">
          <p></p>
    
           <button id="go_to_login" onclick="document.getElementById('id01').style.display='block'">Login</button>
    
           <!-- The Modal -->
           <div id="id01" class="modal">
             <span onclick="document.getElementById('id01').style.display='none'"
           class="close" title="Close Modal">&times;</span>
           
             <!-- Modal Content -->
             <div id="sidebar_close">
               <div id="scroll">
                   <h3>Signin / Signup</h3>
                   <p id="enter">Enter Mobile Number</p>
                   <input id="number" type="text" placeholder="Enter Mobile Number">
                   <input  id="otp" type="number" placeholder="Enter OTP">
                   <button id="signhojao" onclick="login()" >Proceed Via OTP</button>
                   <p id="term">By signing in you agree to our </p>
                   <p class="red">Terms and conditions</p>
               </div>
               </div>
           </div>
         
    
           </div> 
    
           <!-- cart page  -->
           <div id="add_to_cart">
            <a href="#"><img id="cart" src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="cart"></a>
            <a href=""><p id="bag">Cart</p></a>
    
                    <!-- add cart page code html code here -->
    
    
                    <!-- in  this div  -->
    
           </div> 
    </div>`;
}

export default navbar;