'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("fuber_restaurants", [
     {
     Name: "Wendys",
     Image: "https://www.tampaairport.com/sites/default/master/files/Wendy_FullColor_CMYK.gif",
     createdAt: new Date(),
     updatedAt: new Date(),
     meal: "Jr. Bacon Cheeseburger 4 for 4 Combo",
     deliveryFee: "$2.00",
     mealImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIB9Up219nqOmILVKivJGkraWqRTyvza8eA&usqp=CAU"
   },{
     Name: "McDonalds",
     Image: "https://yt3.ggpht.com/ytc/AKedOLS5rTsrjzAgo0yJdrdHBSdEskUL4JsSwCvDCfcKdw=s900-c-k-c0x00ffffff-no-rj",
     createdAt: new Date(),
     updatedAt: new Date(),
     meal: "Double Qtr Pounder Meal",
     deliveryFee: "$2.00",
     mealImg: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/meal/desktop/h-mcdonalds-Double-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg"
   },
   {
    Name: "Burger King",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNGaNQPdDIh9CKm2XNZnANBh09BCBHhLiE5WCr35HAA4B7VO5lNugyZoJu-zpFEFCRco&usqp=CAU",
    createdAt: new Date(),
    updatedAt: new Date(),
    meal: "Quad Stacker Meal",
    deliveryFee: "$2.00",
    mealImg: "https://fastfoodnutrition.org/item-photos/full/1442_s.jpg"
  },
  {
    Name: "Zaxbys",
    Image: "https://mma.prnewswire.com/media/894415/Zaxbys_Logo.jpg?p=facebook",
    createdAt: new Date(),
    updatedAt: new Date(),
    meal: "Traditional Wingz & Thingz",
    deliveryFee: "$2.00",
    mealImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2l8rjoDACY_MIHH3Ucmi8Yt4E2nd0_eF-A&usqp=CAU"
  },
  {
    Name: "Subway",
    Image: "https://www.subway.com/-/media/Base_English/Images/Branding/subway-logo-new-1200x630.png",
    createdAt: new Date(),
    updatedAt: new Date(),
    meal: "Chicken & Bacon Ranch Melt Footlong",
    deliveryFee: "$2.00",
    mealImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBs-krarx5FgCZzQo9_XXY6Izhv6bWXjUeUg&usqp=CAU"
  },
  {
    Name: "Taco Bell",
    Image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Taco_Bell_2016.svg/1200px-Taco_Bell_2016.svg.png",
    createdAt: new Date(),
    updatedAt: new Date(),
    meal: "3 Doritos Locos Tacos Supreme Meal",
    deliveryFee: "$1.50",
    mealImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6f6qYHYpzAjEqT5Gy5Jb6F72zucjjnYyY8w&usqp=CAU"
  },
  {
    Name: "Longhorn Steakhouse",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh88CWzzrN8Hoy0_50FXhIaJKfO4me-YdmUSanrLatYkcITx4eXb-qVdeqBSDh5M7tctc&usqp=CAU",
    createdAt: new Date(),
    updatedAt: new Date(),
    meal: "Parmesean Crusted Chicken",
    deliveryFee: "$3.00",
    mealImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrR0rtgBrj-RnblbcDmCS5DSvXdNYCzjpEA&usqp=CAU"
  },
  {
    Name: "Chic Fil-A",
    Image: "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Stories%20Images/2014/11/19/CFA%20Logo.png?h=560&w=1024&la=en",
    createdAt: new Date(),
    updatedAt: new Date(),
    meal: "12 ct Nugget Meal",
    deliveryFee: "$2.00",
    mealImg: "https://fastfoodnutrition.org/item-photos/full/3422_s.jpg"
  },
  {
    Name: "Moe's Southwest Grill",
    Image: "https://colonysquare.com/media/2627/utsw_pepperlogo.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    meal: "Homewrecker Bowl",
    deliveryFee: "$1.50",
    mealImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARBQvDWuHzC3ZSSC-865WlD1iCxIWdZ2vJQ&usqp=CAU"
  },
  {
    Name: "Chipotle",
    Image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png",
    createdAt: new Date(),
    updatedAt: new Date(),
    meal: "High Protein Bowl Meal",
    deliveryFee: "$1.50",
    mealImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxd_8zt7caHgoOhj88LbjOrWFvsf1U3ps1cA&usqp=CAU"
  },
  {
    Name: "Waffle House",
    Image: "https://www.logo.wine/a/logo/Waffle_House/Waffle_House-Logo.wine.svg",
    createdAt: new Date(),
    updatedAt: new Date(),
    meal: "Bacon, egg and cheese hashbrown bowl",
    deliveryFee: "$1.50",
    mealImg: "https://olo-images-live.imgix.net/38/386f2870cdfa42f09f98389cf7c6852a.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=7a9e52d354bb1737a1f2edc55b31223e"
  },  {
    Name: "Arby's",
    Image: "https://1000logos.net/wp-content/uploads/2018/04/Arbys-Logo.png",
    createdAt: new Date(),
    updatedAt: new Date(),
    meal: "Smokehouse Brisket Meal",
    deliveryFee: "$2.00",
    mealImg: "https://www.laweekly.com/wp-content/uploads/2019/05/arbys_brisket_1_malcolm.jpg"
  }
  
  ])
  {}
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("fuber_restaurants", null, {})
  }
};
