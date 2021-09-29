const menuListing = document.querySelector(".listing-grid");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");

function orderPage(userData){
    window.localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "http://127.0.0.1:5500/fullstackProject/client/orders.html";    
    console.log(userData);
}

const createCustomer = async () => {
    const url = "http://localhost:3118/create_customer";
    const firstName = document.querySelector(".firstName").value;
    const lastName = document.querySelector(".lastName").value;
    const email = document.querySelector(".email").value;
      
    const userData = {
      firstName,
      lastName,
      email,
    };
    const userJson = [{
        firstName: firstName,
        lastName:lastName,
        email: email,
    }]
    console.log({ userData });
    const createCustomer = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(userData),
      
    });
    orderPage(userJson);
};


submit.addEventListener("click", () => {
    createCustomer();
    console.log("you click me");
});