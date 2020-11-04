import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon banner"
      />

      <div className="home__row">
        <Product
          key="12321341"
          id="12321341"
          title="Oppo A52 (Twilight Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={13990.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71FPmXaDfbL._SL1500_.jpg"
        />

        <Product
          key="12321342"
          id="12321342"
          title="KendalWood Furniture Solid Wood Rectangle Shape Coffee Table for Living Room | Sofa Center Table - Natural Brown"
          price={6399}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71K-eKxLHwL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          key="12321343"
          id="12321343"
          title="Eureka Forbes Aquaguard Marvel 8L RO+UV e-boiling+MTDS with Active Copper Water Purifier (White & Black)"
          price={12499}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51IStyoD0ML._SL1100_.jpg"
        />

        <Product
          key="12321344"
          id="12321344"
          title="Cockatoo CTM-04 1.5HP (2HP Peak) Motorized Treadmill"
          price={15990}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/61UhYJEeQcL._SL1200_.jpg"
        />

        <Product
          key="12321345"
          id="12321345"
          title="Hisense 80 cm (32 inches) HD Ready Smart Certified Android LED TV 32A56E (Black) (2020 Model)"
          price={12990}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71aq%2BfrsDDL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          key="12321346"
          id="12321346"
          title="LG UltraWide 34 Inch WFHD (2560 x 1080) IPS Display - HDR 10, AMD Free sync, sRGB 99%, Multitasking and Gaming Monitor - 34WL500"
          price={25949}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71xMxbdxrsL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
