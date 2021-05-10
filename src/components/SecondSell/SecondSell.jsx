import React from "react";
import Form from "../Form/Form";
import "./SecondSell.css";

const SecondSell = () => {

  return (
    <div className="second-sell">
      <div className="selling-point">
        <img
          className="second-product"
          src="https://wizerlist.com/wp-content/uploads/2020/06/oticon-2.jpg"
          alt="Left and right silver hearing aid pieces"
        />
        <div className="second-info">
          <h2 className="question">Why Oticon More Technology?</h2>
          <p className="answer">
            Patients are constantly presented with complex, unpredictable sound
            scenes. It’s the role of the brain to help make meaning of it all.
            Oticon More is designed to work more like the brain, because it
            learned through experience.ticon More delivers 30% more sound to the
            brain, giving the brain more of what it needs to make better sense
            of sound, so you can get more out of life. Interested in seeing more products?
            Check out the official <a href="https://www.oticon.com/professionals/brainhearing-technology/more-technology">Oticon More Technology website</a> for more.
          </p>
          <h3 className="limited">FOR A LIMITED TIME ONLY WHEN YOU SIGN UP</h3>
        </div>
      </div>
      <Form />
    </div>
  );
};
export default SecondSell;
