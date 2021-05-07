import React from 'react';
import Form from '../Form/Form';
import './SecondSell.css';



const SecondSell = () => {

  return (
    <div className='second-sell'>
     <div className="selling-point">
          <img className="image-element" 
          src="https://wdh.azureedge.net/-/media/oticon-us/main/professionals/brainhearing-technology/bh-approach/opn-offers-brainhearing_1200x1200.jpg?h=1200&la=en&w=1200&rev=5EBE&hash=5E9789757B94B41A20AA1BCB33938A16389A24F0" 
          alt="A side profile of a white male with short grey hair and beard with art of a blue cloud showing a view into the brain" 
          />
        <div className="second-info">
          <h2 className="question">Why Oticon More Technology?</h2>
          <p className="answer">Patients are constantly presented with complex, unpredictable sound scenes. It’s the role of the brain to help make meaning of it all. Oticon More is designed to work more like the brain, because it learned through experience.ticon More delivers 30% more sound to the brain, giving the brain more of what it needs to make better sense of sound, so you can get more out of life. For More information, be sure to check out <a href="https://www.oticon.com/professionals/brainhearing-technology/more-technology" target="_blank"  rel="noopener noreferrer"> the Oticon More official website.</a> Sign up with EarQ and recieve $500 off your next purchase with Oticon More.</p>
          <h3 className="limited">FOR A LIMITED TIME ONLY WHEN YOU SIGN UP</h3>
        </div>
      </div>
      <Form />
    </div>
  )
}
export default SecondSell
