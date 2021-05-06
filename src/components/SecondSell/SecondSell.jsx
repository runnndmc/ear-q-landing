import React from 'react';
import Form from '../Form/Form';
import './SecondSell.css';



const SecondSell = () => {
  return (
    <div className='second-sell'>
     <div className="product">
        <img className="second-product" src="https://wizerlist.com/wp-content/uploads/2020/06/oticon-2.jpg" alt="Left and right silver hearing aid pieces" />
        <div className="detail">
          <h2 className="name">Why Oticon More Technology?</h2>
          <p className="price">Patients are constantly presented with complex, unpredictable sound scenes. It’s the role of the brain to help make meaning of it all. Oticon More is designed to work more like the brain, because it learned through experience.ticon More delivers 30% more sound to the brain, giving the brain more of what it needs to make better sense of sound, so you can get more out of life.</p>
          <h3 className="description">FOR A LIMITED TIME ONLY WHEN YOU SIGN UP</h3>
        </div>
      </div>
      <Form />
    </div>
  )
}
export default SecondSell
