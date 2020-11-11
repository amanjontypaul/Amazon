import './App.css';
import React from 'react';
import logo from './../src/assets/images/logo2.jpg';
import img1 from './../src/assets/images/image1.jpg';
import img2 from './../src/assets/images/image2.jpg';
import img3 from './../src/assets/images/image3.jpg';

export class App extends React.Component {

  listItem = (image, text) => {
    return (<div className="col-12 col-md-4 col-lg-2 cards">
      <img className="imageStyle" src={image} />
      <h1 className="cardText">
        {text}
      </h1>
    </div>)
  }

  render() {
    return (
      <div className="App">
        <header className="row">
          <div>
            <a className="brand" href="/"><img className="brandImage" src={logo} />
            </a>
          </div>
          <div>
            <input className='inputField' type="text" placeholder="Search for product" />
          </div>
          <div>
            <h1 className="headerText">
              Hello, Syed
        </h1>
          </div>
          <div>
            <h1 className="headerText">
              Returns and Orders
        </h1>
          </div>
          <div>
            <h1 className="headerText">
              Try Prime
        </h1>
          </div>
        </header>
        <div className="row">
        {this.listItem(img1, "SSB Interview")}
        
        {this.listItem(img2, "Footwear")}
        
        {this.listItem(img3, "Salt")}
        
        {this.listItem(img1, "Change Interview")}
        
        {this.listItem(img2, "Footwear")}
        
        {this.listItem(img3, "Salt")}
      
          {/* <div className="col-12 col-md-4 col-lg-2 cards">
            <img className="imageStyle" src={img1} />
            <h1 className="cardText">
              SSB Interview
              </h1>
          </div>
          <div className="col-12 col-md-4 col-lg-2 cards">
            <img className="imageStyle" src={img2} />
            <h1 className="cardText">
              SSB Interview
              </h1>
          </div>

          <div className="col-12 col-md-4 col-lg-2 cards">
            <img className="imageStyle" src={img3} />
            <h1 className="cardText">
              SSB Interview
              </h1>
          </div>

          <div className="col-12 col-md-4 col-lg-2 cards">
            <img className="imageStyle" src={img2} />
            <h1 className="cardText">
              SSB Interview
              </h1>
          </div>

          <div className="col-12 col-md-4 col-lg-2 cards">
            <img className="imageStyle" src={img3} />
            <h1 className="cardText">
              SSB Interview
              </h1>
          </div>

          <div className="col-12 col-md-4 col-lg-2 cards">
            <img className="imageStyle" src={img1} />
            <h1 className="cardText">
              SSB Interview
              </h1>
          </div> */}
</div>
<footer className="row center">All right reserved</footer>
        
      </div>
    );
  }

}

export default App;
