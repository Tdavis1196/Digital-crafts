import React, { Component } from 'react'

export default class MyProfile extends Component {
    state = {
    make: "Bugatti",
    model: "La voiture noire",
    engine: "v16",
    horsepower: "1500",
    price: "19000000",
    image: [
      {
        primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
        secondary:
          "https://www.carscoops.com/wp-content/uploads/2019/03/c64f9e1e-bugatti-la-voiture-noire-roadster-rendering-0-1024x554.jpg",
      },
    ],
    transmission: "7 speed dual clutch",
    topSpeed: [{ US: "261", Metric: "420" }],
}
   getImage =(e)=> {
       e.target.setAttribute( 'src', this.state.image[0].secondary);
       e.target.setAttribute('alt', "secondaryPic");
    
       

    //    return (document.getElementsByClassName(".carimg").src = this.state.image[0].primary ?
    //    document.getElementsByClassName(".carimg").src = this.state.image[0].primary : document.getElementsByClassName(".carimg").src = this.state.image[0].secondary);

    }
    
    flipImage =()=>{
        const coverImg = document.querySelector(".carimg");
        const primaryPic = this.state.image[0].primary;
        const secondaryPic = this.state.image[0].secondary;
        if (coverImg.src === this.state.image[0].primary) {
            coverImg.setAttribute('src',secondaryPic),window.location.reload();
        //    return(document.getElementsByClassName(".carimg").src = secondaryPic,window.location.reload());
        }else {
            coverImg.setAttribute('src',primaryPic),window.location.reload();     
        }

    
    }
    
  
       

    
    render() {
        return (
            <div>
                <p>Make: {this.state.make}</p>
                <p>Model: {this.state.model}</p>
                <p>Engine: {this.state.engine}</p>
                <p>Horsepower: {this.state.horsepower}</p>
                <p>Price: {this.state.price}</p>
                <p>Transmission: {this.state.transmission}</p>
                <p>Top Speed: US:{this.state.topSpeed[0].US} Metric: {this.state.topSpeed[0].Metric}</p>
                <img className="carimg" src={this.state.image[0].primary} alt=""/>
                <button onClick={this.flipImage}>
                    Flip Image
                    </button>
            </div>
        )
    }
}