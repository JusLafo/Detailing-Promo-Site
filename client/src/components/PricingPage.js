import React from "react";

const PricingPage = () => {

  return (
    <div>
      <br/>
      <a className="home-button" href="/">Home</a>
      <br/>
      <br/>
      <div className="pricing-div">
        <h5 className="exterior-header">Exterior Wash</h5>
        <h6 className="exterior-price">Price: $50 USD</h6>
          <ul>
            <li>Hand Wash</li>
            <li>Bug and Tar Removal</li>
            <li>Door jam cleaning</li>
            <li>Break dust cleaning along with wheel/tire shining</li>
          </ul>
          <h5 className="fullwash-header">Exterior and Interior Wash</h5>
          <h6 className="fullwash-price">Price: $150 USD</h6>
            <ul>
              <li>Hand Wash</li>
              <li>Bug and Tar Removal</li>
              <li>Door jam cleaning</li>
              <li>Break dust cleaning along with wheel/tire shining</li>
              <li>Interior and trunk carpet cleaning</li>
              <li>Cleaned and polished dash</li>
              <li>Cleaned air vents and speaker grilles</li>
              <li>Cleaned windows and mirrors all around</li>
              <li>Interior vinyl or leather polish</li>
            </ul>
        </div>
    </div>
  )
}

export default PricingPage