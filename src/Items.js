import React, { Component } from 'react';

function item(props){

}


class Items extends Component {


  render(){

    const items = [{
      img: "https://uncrate.com/p/2018/01/pre-pro-aston-martin-1.jpg",
      category: "automobile", 
      title: "Cool car bro",
      text: "Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text",
      company: "ASTON MARTIN"
    },{
      img: "https://uncrate.com/p/2018/01/matchless-g45-1.jpg",
      category: "motorcycle/transportation", 
      title: "Sick bike bro",
      text: "Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text"
    },{
      img: "https://uncrate.com/p/2018/01/pacific-overlander-1.jpg",
      category: "camping/outdoors", 
      title: "Nice view bro",
      text: "Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text"
    },{
      img: "https://uncrate.com/p/2018/01/ironhill-risingsun.jpg",
      category: "beverages/beer", 
      title: "Dank beer bro",
      text: "Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text"
    },{
      img: "https://uncrate.com/p/2018/01/do-c-hotel-1.jpg",
      category: "shelter/architecture", 
      title: "Tokyo-bro, Hotel!!",
      text: "Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text"
    },{
      img: "https://uncrate.com/p/2018/01/nike-epic-react-1.jpg",
      category: "Sneakers/Shoes", 
      title: "Rad kicks bro",
      text: "Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text,Lorem ipsum this is some text"
    }]

    const hero = {
      img: "https://uncrate.com/p/2017/10/aston-martin-residences-3.jpg",
      title: "Aston Martin Residences",
      category: "Shelter/Real Estate",
      description: "Yes, you read that right. The luxury automobile brand is venturing into real estate with Aston Martin Residences. Located in downtown Miami, the 66-story glass and steel tower will feature 391 Bond-worthy condominiums. This will also include 7 penthouses and a duplex penthouse, each with their own private pools and terrace. With ownership, you'll also gain access to their oceanfront fitness center, virtual golf room, art gallery, two cinemas, and a full-service spa. Although this is a new endeavor, they aren't leaving their sports car roots totally in the dust. Signature details like carbon fiber reception desks, doors with custom Aston Martin handles, and kestrel tan leather door tabs will be found throughout. Construction is already underway and is expected to be complete in 2021. Photos: Aston Martin Residences"
    }
    const allItems = items.map((thing) => {
      return(
        <div className="div-item">
        {console.log(thing)}
          <img src={thing.img} />
          <a href="#" className="a--item__cat"><p>{thing.category}</p></a>
          <h2>{thing.title}</h2>
          <p>{thing.text}</p>
          <div className="buy">
            <a href="#">BUY HERE</a>
          </div>
          <div className="share">
            <a className="sharebtn" href="#">SHARE</a> <a className="stashbtn" href="#">STASH</a>
          </div>
        </div>
      )
    })

    return(
      <div className="div--container">
        <div className="div--hero">
          <img src={hero.img} />
          <a href="#" className="a--hero__cat"><p>{hero.category}</p></a>
          <h2>{hero.title}</h2>
          <p>{hero.description}</p>
          <div className="buy">
            <a href="#">BUY HERE</a>
          </div>
          <div className="share">
            <a className="sharebtn" href="#">SHARE</a> <a className="stashbtn" href="#">STASH</a>
          </div>
        </div>

        <div className="ad">
        <h1>SWEET AD, BRO 
        </h1>
        </div>
          {allItems}
      </div>
      );
  }
}

export default Items;