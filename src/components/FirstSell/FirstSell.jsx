import React, { useEffect } from 'react'

import './FirstSell.css'
import Layout from '../shared/Layout/Layout'



const FirstSell = () => {

  useEffect(()=> {
    window.scrollTo(0,0)
  }, [])

  function scroll(){
window.scrollTo(1500, 1500)
  }

  return (
    <Layout>
      <div className="main-landing">
        <img className="product-image" src="https://wdh01.azureedge.net/-/media/hidden-hearing/uk/shared/images/hearing-aids/opn/hearing-aid-opn-royalblue-min.png,qh=670,ala=en-GB,aw=1431,arev=64FB,ahash=E654C617D727386CCF31D26A11739E01E951AF19.pagespeed.ce.7EMrzIEPK3.png" alt="Left and right silver hearing aid pieces" />
        <div className="detail">
          <h2 className="detail-heading">Get $500 off</h2>
          <h3 className="detail-description">Oticon More Technology</h3>
          <p className="description">LIMITED TIME ONLY</p>
          <button className="signup-btn" onClick={scroll}>Sign Up Today</button>
        </div>
       </div> 
    </Layout>
  )
}

export default FirstSell
