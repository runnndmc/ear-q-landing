import React from 'react';
import './SecondSell.css';



const SecondSell = () => {
  return (
    <div className='second-sell'>
     <div className="product">
        <img className="product-image" src="https://wizerlist.com/wp-content/uploads/2020/06/oticon-2.jpg" alt="Left and right silver hearing aid pieces" />
        <div className="detail">
          <div className="name">$500 off</div>
          <div className="price">Oticon More Technology</div>
          <div className="description">FOR A LIMITED TIME ONLY WHEN YOU SIGN UP</div>
        </div>
      </div>
      <h3>form</h3>
      {/* <Link className="product" to={`/products/${props._id}`}>
        <img className="product-image" src={props.imgURL} alt={props.name} />
        <div className="product-name">{props.name}</div>
        <div className="price">{`$${props.price}`}</div>
      </Link> */}
    </div>
  )
}
export default SecondSell
