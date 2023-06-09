var data = JSON.parse(localStorage.getItem("mg_base"));
var arr = [];
arr.push(data);
displaypro(arr);

function displaypro(arr) {
    arr.map(function (ele) {
        let name = document.createElement("p");
        name.textContent = ele.name;
        name.setAttribute("class", "pro_name");
        let tata = document.createElement("p");
        tata.textContent = "Tata 1mg Healthcare Solutions Private Limited";
        tata.setAttribute("class", "tata");
        let rating_div = document.createElement("div");
        rating_div.setAttribute("class", "div_pro_rating");
        let rating = document.createElement("p");
        rating.textContent = `${ele.rating}★`;
        rating.setAttribute("class", "pro_rating");
        rating_div.append(rating);
        let pro_img = document.createElement("img");
        pro_img.setAttribute("src", ele.image);
        pro_img.setAttribute("class", "pro_img");

        var price_box_head = document.createElement("p");
        price_box_head.textContent = "↝1,456 people bought this recently";
        price_box_head.setAttribute("class", "price_head");

        var price = document.createElement("p");
        price.setAttribute("class", "price_div");
        var span = document.createElement("span");
        span.textContent = "₹" + ele.price;
        span.setAttribute("class", "pro_price");

        var span2 = document.createElement("span");
        let dprice = ele.price + 250;
        span2.textContent = "₹" + dprice;
        span2.setAttribute("class", "pro_mrp");

        var span3 = document.createElement("span");
        span3.textContent =  "15% off";
        span3.setAttribute("class", "pro_dis");

        price.append(span, span2, span3);

        var care_price = document.createElement("p");
        care_price.setAttribute("class", "price_div");
        var care_span = document.createElement("span");
        care_span.textContent = "₹" + ele.price;
        care_span.setAttribute("class", "pro_price");
        care_price.setAttribute("class", "price_div");
        var care_span2 = document.createElement("span");
        care_span2.textContent = "+ free shipping and 5% cashback with";
        care_span2.setAttribute("class", "care_span2");
        care_price.append(care_span, care_span2);
        let care_div = document.createElement("div");
        care_div.setAttribute("class", "care_plan");
        let care_plan = document.createElement("p");
        care_plan.textContent = "Care Plan";
        care_div.append(care_plan);

        var include = document.createElement("p");
        include.textContent = "Inclusive of all taxes";
        include.setAttribute("class", "include");

        let quantity = document.createElement("p");
        quantity.textContent = "Quantity :-" + "10 " + "peice";
        quantity.setAttribute("class", "pro_quantity");

        let add_cart = document.createElement("button");
        add_cart.textContent = "ADD TO CART";
        add_cart.setAttribute("class", "add_cart");

        document.querySelector("#image").append(pro_img);
        document.querySelector("#pro_detail").append(name, tata, rating_div);
        document
            .querySelector("#price_box")
            .append(
                price_box_head,
                price,
                care_price,
                care_div,
                include,
                quantity,
                add_cart
            );

        let data_send = {
            name: ele.name,
            quantity: 1,
            mrp: ele.price,
            discount: 15,
            price: dprice,
        };

        add_cart.onclick = () => {
            cartsend(data_send);
        };
    });
}
function cartsend(data) {
    var cart_arr = JSON.parse(localStorage.getItem("cartArrayS1")) || [];
    cart_arr.push(data);
    localStorage.setItem("cartArrayS1", JSON.stringify(cart_arr));
    alert('product added to cart ');
}
const cartbtn = document.getElementById("red-cart")

  cartbtn.addEventListener("click",()=>{
  if(token){
    window.location.href="cart.html"
  }else{
    alert("Please Login fisrt!")
  }
  })

cartCount = document.getElementById("cartItembox");
let cartarr =  JSON.parse(localStorage.getItem("cartArrayS1")) || null;

if(cartarr){
  cartCount.style.display="block"
  cartCount.innerText=cartarr.length;
}else{
  cartCount.style.display="none"
}

