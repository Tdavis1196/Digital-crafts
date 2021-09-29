const menuListing = document.querySelector(".secCont");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const userName = document.querySelector(".username");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");

// make a customer login screen
// grab info from input fields on that login screen
// send that to your create customer route
// make a function that sends that data to your route
// const readUserData = async () => {
//     const url = "http://localhost:3118/get_customers";
//     const userData = await fetch(url, {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await userData.json();
  
//     for (const user of json) {
//       const firstName = user.firstName;
//       const lastName = user.lastName;
//       const email = user.email;
//       const userDetails = document.createElement("div");
//       const fname = document.createElement("p");
//       const lname = document.createElement("p");
//       const mail = document.createElement("p");
//       fname.innerHTML = firstName;
//       lname.innerHTML = lastName;
//       mail.innerHTML = email;
//       userDetails.append(fname, lname, mail);
//       userlist.append(userDetails);
//     }
//     console.log(json);
//   };
async function orderPage(restaurant) {
  const url = "http://localhost:3118/create_order";
  const orders = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurant)
});
if(orders.status === 200){
  window.location.href = "http://127.0.0.1:5500/fullstackProject/client/orders.html";
}
      
}

const getRestaurants = async () => {
    const url = "http://localhost:3118/get_restaurants";
    const restaurants = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
      },
  });
  const jsonRest = await restaurants.json();
  
  for (const place of jsonRest) {
    console.log(place);
      const name = place.Name;
      const img = place.Image;
      const placeDetails = document.createElement("div");
      placeDetails.className = "details";
      const restName = document.createElement("p");
      restName.className = "rName";
      const restImg = document.createElement("img");
      const placeOrder = document.createElement("button");
      placeOrder.className = "placeOrder";
      placeOrder.innerHTML = "Place Order";
      placeOrder.type = "submit";
      placeOrder.addEventListener("click", ()=> {
        try{
          orderPage(place);
        }catch (error) {
          console.error(error);
        }
      });
      restName.innerHTML = name;
      restImg.src= img;
      placeDetails.append(restName,restImg,placeOrder);
      menuListing.append(placeDetails);
      console.log(jsonRest)
  }
};

getRestaurants();
