let order = document.getElementById("order");


let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateOrder =()=>{
    return (order.innerHTML = orderItemsData
        .map((x) => {
            let {id, name, price, desc, img} = x;
            let search = basket.find((x)=>x.id === id) || [];
            return `
            <div id=product-id-${id} class="item">
            <img width="220" height="150" class="pizza-img-real" src=${img} alt="">
            <div class="detail">
                <h1 class="pizza-name">${name}</h1>
                <p class="pizza-desc">${desc}</p>
                <div class="price-quantity">
                    <h2>zł ${price}</h2>
                    <div class="buttons">
                      <i onclick="decrement(${id})" class="ri-subtract-line"></i>
                      <div id=${id} class="quantity">
                         ${search.item === undefined? 0: search.item}</div>
                      <i  onclick="increment(${id})" class="ri-add-line"></i>
                    </div>
                </div>
            </div>
        </div>`;

        }).join(""));

};
generateOrder();
let increment = (id)=> {
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id);
    if (search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        });
    }
    else {
        search.item +=1;
    }
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
    //console.log(basket);
  
};
let decrement = (id)=> {
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id);
    if (search === undefined) return;
    else if (search.item === 0) return;
 
    else {
        search.item -=1;
    }
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
    basket = basket.filter((x)=>x.item !== 0);
    
  
};
let update =(id) => {
    let search = basket.find((x)=>x.id=== id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation =()=> {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0);
  
   
};
calculation();
