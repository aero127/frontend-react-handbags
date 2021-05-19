import React from 'react';
import './App.css';
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'
import Product from "./Product";
import Button from "./Button";


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
              <Button text={"To the collection"}/>
              <Button text={"Shop all bags"}/>
              <Button text={"Pre-orders"}/>
          </nav>

<main>
    <Product
        image={bag1}
        title={"The handy bag"}
        price={"€400,-"}
        title2={"Best seller"}
        />
    <Product
        image={bag2}
        title={"The stylish bag"}
        price={"€250,-"}
        title2={"Best seller"}
    />
    <Product
        image={bag3}
        title={"The simple bag"}
        price={"€300,-"}
        title2={"New collection"}
    />
    <Product
        image={bag4}
        title={"The trendy bag"}
        price={"€150,-"}
        title2={"New collection"}
    />
</main>
      </>)
}

export default App;



