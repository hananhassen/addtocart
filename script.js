window.onload=function(){
    let others=document.querySelectorAll(".content")
    let carttem=document.getElementById("cart-items")
    let cr=document.getElementById("div8")

    others.forEach(other=>{
           
        other.classList.remove("hidden");
    })
    cr.classList.add("hidden");

    if(smallscreen){
        list.style.opacity = "0";
    list.style.display="flex";
    }
    else{
        list.style.opacity = "1";
        list.style.display="flex";
    }
}


let menu=document.getElementById("menu");
let list=document.getElementById("list");
menu.addEventListener("click",function(){
    if (list.style.opacity === "1") {
        list.style.opacity = "0";
        list.style.display="flex";

    } else {
        list.style.display="block";
        list.style.textAlign="end";
        list.style.marginTop="30px";
        list.style.padding="10px";
    


        list.style.opacity = "1";
    

    }

})
let cart=[];

function addToCart(productId, productName, productPrice, productImage){
    const existingitem=cart.find(item=>item.id===productId)
    if(existingitem){
        existingitem.quantity+=1;
    }else{
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }

          displaycart();
          ubdatenotification();
          function  ubdatenotification(){
            let bage=document.querySelector(".notif");
            if(cart.length===0){
                bage.style.display
            }
           
           else{ bage.textContent=cart.length}
          }

}
function displaycart(){
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="30px" hight="30px" class="border-4 border-blue-600 w-full">
            <p class=" text-2xl text-center uppercase">${item.name} - $${item.price} x ${item.quantity}</p>
        `;
        cartItems.appendChild(div);
         cartItems.style.display="flex"
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `${total}`;
}
function payment(){

 let choise=document.getElementById("choise");

 if(choise.style.opacity==="1")
      { choise.style.opacity="0";}
  else{ choise.style.opacity="1"}
;

}


function completd(){
let bage=document.querySelector(".notif");
    cart=[];
    displaycart();
   
        alert(`the paymentcomplited successfully thankyou!!`)
   choise.style.opacity="0";
   bage.textContent="";
   

}
function complet(){
    let bage=document.querySelector(".notif");
        cart=[];
        displaycart();
       
            alert(`the paymentcomplited successfully thankyou!!`)
       choise.style.opacity="0";
       bage.textContent="";
       
    
    }
    function comple(){
        let bage=document.querySelector(".notif");
            cart=[];
            displaycart();
           
                alert(`the paymentcomplited successfully thankyou!!`)
           choise.style.opacity="0";
           bage.textContent="";
           
        
        }

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');
        const productImage = button.getAttribute('data-image');
        
        addToCart(productId, productName, productPrice, productImage);
    });
});
let crc=document.getElementById("div8")
console.log(crc)
document.addEventListener("DOMContentLoaded", function() {
    
    let crt=document.getElementById("crt")
 
    let kid=document.getElementById("kid")
    let ki=document.getElementById("div1")

    let abaya=document.getElementById("abaya")
    let ab=document.getElementById("div3")

    let shoes=document.getElementById("shoes")
    let sh=document.getElementById("div2")

    let jewlery=document.getElementById("jewlery")
    let je=document.getElementById("div5")
    let bag=document.getElementById("bag")
    let ba=document.getElementById("div4")
    let home=document.getElementById("home")
    let cr=document.getElementById("div8")
    let contact=document.getElementById("contact")
    let co=document.getElementById("div6")
    let footer=document.getElementById("footer")

console.log(cr)
    let others=document.querySelectorAll(".content")
    let carttem=document.getElementById("cart-items")
    console.log(kid);
    console.log(others);
    console.log(carttem);
    const smallscreen=window.matchMedia("(max-width:768px)").matches;
    
    crt.addEventListener("click",()=>{
        const cartItems = document.getElementById('cart-items')
      
        others.forEach(other=>{
            other.classList.add("hidden");
          
        })
        cr.classList.remove("hidden");
    
        if(smallscreen){
            list.style.opacity = "0";
        list.style.display="flex";
        }
        else{
            list.style.opacity = "1";
            list.style.display="flex";
        }
        
     });
   
    contact.addEventListener("click",()=>{
    
    
      
        others.forEach(other=>{
           
            other.classList.add("hidden");
           

        })
        cr.classList.add("hidden");
        co.classList.remove("hidden");
        if(smallscreen){
            list.style.opacity = "0";
        list.style.display="flex";
        }
        else{
            list.style.opacity = "1";
            list.style.display="flex";
        }
        
    });
    kid.addEventListener("click",()=>{
    
    
      
        others.forEach(other=>{
           
            other.classList.add("hidden");
        })
        cr.classList.add("hidden");
        ki.classList.remove("hidden");
        if(smallscreen){
            list.style.opacity = "0";
        list.style.display="flex";
        }
        else{
            list.style.opacity = "1";
            list.style.display="flex";
        }
    });
    abaya.addEventListener("click",()=>{
    
    
      
        others.forEach(other=>{
           
            other.classList.add("hidden");
        })
        cr.classList.add("hidden");
        ab.classList.remove("hidden");
        if(smallscreen){
            list.style.opacity = "0";
        list.style.display="flex";
        }
        else{
            list.style.opacity = "1";
            list.style.display="flex";
        }
    });
    shoes.addEventListener("click",()=>{
    
    
      
        others.forEach(other=>{
           
            other.classList.add("hidden");
        })
        cr.classList.add("hidden");
        sh.classList.remove("hidden");
        if(smallscreen){
            list.style.opacity = "0";
        list.style.display="flex";
        }
        else{
            list.style.opacity = "1";
            list.style.display="flex";
        }
    });
    bag.addEventListener("click",()=>{
    
    
      
        others.forEach(other=>{
           
            other.classList.add("hidden");
        })
        cr.classList.add("hidden");
        ba.classList.remove("hidden");
        if(smallscreen){
            list.style.opacity = "0";
        list.style.display="flex";
        }
        else{
            list.style.opacity = "1";
            list.style.display="flex";
        }
    });
    
    jewlery.addEventListener("click",()=>{
    
    
      
        others.forEach(other=>{
           
            other.classList.add("hidden");
        })
        cr.classList.add("hidden");
        je.classList.remove("hidden");
        if(smallscreen){
            list.style.opacity = "0";
        list.style.display="flex";
        }
        else{
            list.style.opacity = "1";
            list.style.display="flex";
        }
    });
    home.addEventListener("click",()=>{
    
    
      
        others.forEach(other=>{
           
            other.classList.remove("hidden");
        })
        cr.classList.add("hidden");

        if(smallscreen){
            list.style.opacity = "0";
        list.style.display="flex";
        }
        else{
            list.style.opacity = "1";
            list.style.display="flex";
        }
    }); 
    
    
 
     
});
