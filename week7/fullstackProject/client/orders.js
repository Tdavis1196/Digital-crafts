// const customer = window.localStorage.getItem('userData');
// console.log(customer);
const orderDiv = document.querySelector(".orderDiv");

const getOrders = async () => {
    const url = "http://localhost:3118/get_orders";
    const orders = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
      },
  });
  const jsonOrders = await orders.json();
  console.log(jsonOrders);
  for (const place of jsonOrders) {
    console.log(place);
      const name = place.restaurant_name;
      const mealImg = place.mealImg;
      const oName = place.restaurant_order;
      const placeDetails = document.createElement("div");
      placeDetails.className = "details";
      const restName = document.createElement("p");
      const orderName = document.createElement("P");
      restName.className = "rName";
      const restImg = document.createElement("img");
      orderName.innerHTML= oName;
    //   const placeOrder = document.createElement("button");
    //   placeOrder.className = "placeOrder";
    //   placeOrder.innerHTML = "Place Order";
    //   placeOrder.type = "submit";
    //   placeOrder.addEventListener("click", ()=> {
    //     orderPage(order);
    //   })
      restName.innerHTML = name;
      restImg.src= mealImg;
      placeDetails.append(restName,restImg,orderName);
      orderDiv.append(placeDetails);
      console.log(jsonOrders)
  }
};
getOrders();

