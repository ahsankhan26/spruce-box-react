import React, { useState } from 'react';
import arrow1 from '../assets/images/Vector1.svg';
import arrow2 from '../assets/images/Vector2.svg';
import arrow3 from '../assets/images/Vector3.svg';
import arrow4 from '../assets/images/Vector4.svg';
import SpruceBoxNow from '../assets/images/Spruce Box Now.svg';
import SpruceBoxMarketplace from '../assets/images/Spruce Box Marketplace.svg';
import SpruceBoxPro from '../assets/images/Spruce Box Pro.svg';
import Frame42 from '../assets/images/Frame 42.jpg';
import PalletBoxes from '../assets/images/Pallet With Boxes.jpg';
import ShoppingBasket from '../assets/images/Shopping Basket.jpg';
import ConstructionTool from '../assets/images/Construction Tools.jpg';
import OfficeDayBook from '../assets/images/Office Daybook.jpg';

const arrows = [arrow1, arrow2, arrow3, arrow4];

function Details() {
  const arrowImages = arrows.map((arrow, i) => {
    return (
      <img className={`arrow${i + 1}`} src={arrow} alt={`arrow${i + 1}`} />
    );
  });

  const [activeBtnOne, setActiveBtnOne] = useState(false);
  const [activeBtnTwo, setActiveBtnTwo] = useState(false);
  const [activeBtnThree, setActiveBtnThree] = useState(false);
  const [activeBtnFour, setActiveBtnFour] = useState(false);

  const onGetHovered = (selected, toggle) => {
    console.log('hovered onn ==========>', selected);
    switch (selected) {
      case 'first':
        setActiveBtnOne(toggle);
        break;
      case 'second':
        setActiveBtnTwo(toggle);
        break;
      case 'third':
        setActiveBtnThree(toggle);
        break;
      case 'forth':
        setActiveBtnFour(toggle);
        break;
      default:
        break;
    }
  };

  return (
    <section className="details">
      <p>Begin your experience.</p>
      <h1>Expanding Commerce</h1> <h1>& Community</h1>
      <div className="grid">
        <div className="col col1">
          <div>
            <img className="gridImg" src={PalletBoxes} alt="Boxes" />
            <button
              className={`gridBtn ${activeBtnOne ? 'gridBtn-active' : ''}`}
              onMouseOver={() => {
                onGetHovered('first', true);
              }}
              onMouseOut={() => {
                onGetHovered('first', false);
              }}
            >
              SB Now
            </button>
            <p className="gridTxt mt-5">
              Delivery On-Demand <span className="arrow">&#8594;</span>
            </p>
          </div>
          <div className="mt-5">
            <img className="gridImg" src={ShoppingBasket} alt="Boxes" />
            <button
              className={`gridBtn ${activeBtnTwo ? 'gridBtn-active' : ''}`}
              onMouseOver={() => {
                onGetHovered('second', true);
              }}
              onMouseOut={() => {
                onGetHovered('second', false);
              }}
            >
              SB Marketplace
            </button>
            <p className="gridTxt mt-5">
              Shopping On-Demand <span className="arrow">&#8594;</span>
            </p>
          </div>
        </div>

        <div className="col col2">
          <div>
            <img
              className="gridImg1"
              src={SpruceBoxNow}
              alt="Boxes"
              onMouseOver={e => {
                onGetHovered('first', true);
              }}
              onMouseOut={() => {
                onGetHovered('first', false);
              }}
            />
            <img
              className="gridImg2"
              src={SpruceBoxMarketplace}
              alt="Boxes"
              onMouseOver={() => {
                onGetHovered('second', true);
              }}
              onMouseOut={() => {
                onGetHovered('second', false);
              }}
            />
          </div>
          <div>
            <img
              className="gridImg3"
              src={SpruceBoxPro}
              alt="Boxes"
              onMouseOver={e => {
                onGetHovered('third', true);
              }}
              onMouseOut={() => {
                onGetHovered('third', false);
              }}
            />
            <img
              className="gridImg4"
              src={Frame42}
              alt="Boxes"
              onMouseOver={e => {
                onGetHovered('forth', true);
              }}
              onMouseOut={() => {
                onGetHovered('forth', false);
              }}
            />
          </div>

          {arrowImages}
        </div>
        <div className="col col3">
          <div>
            <img className="gridImg" src={ConstructionTool} alt="Boxes" />
            <button
              className={`gridBtn ${activeBtnThree ? 'gridBtn-active' : ''}`}
              onMouseOver={() => {
                onGetHovered('third', true);
              }}
              onMouseOut={() => {
                onGetHovered('third', false);
              }}
            >
              SB Pro
            </button>
            <p className="gridTxt mt-5">
              <span className="arrow">&#8592;</span> Professionals On-Demand
            </p>
          </div>
          <div className="mt-5">
            <img className="gridImg" src={OfficeDayBook} alt="Boxes" />
            <button
              className={`gridBtn ${activeBtnFour ? 'gridBtn-active' : ''}`}
              onMouseOver={() => {
                onGetHovered('forth', true);
              }}
              onMouseOver={() => {
                onGetHovered('forth', false);
              }}
            >
              SB Next
            </button>
            <p className="gridTxt mt-5">
              <span className="arrow">&#8592;</span> Software for Business{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
