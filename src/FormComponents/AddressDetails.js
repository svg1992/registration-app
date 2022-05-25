import React from 'react';
import Country from './Country';
import { Link } from 'react-router-dom';

const AddressDetails = ({ SetFormData, handleChange, values, formErrors }) => {
  return (
    <div className="Addressform-container Contactform-container">
      <h3 className="Addressform-header">Address Details</h3>
      <div className="Addressform-field inputForm"></div>
      <div className="Addressform-field inputForm">
        <label>City*</label>
        <input
          name="city"
          placeholder="Enter Your City"
          onChange={handleChange}
          value={values.city}
          type="text"
        />
        {formErrors.city && <p>Invalid city </p>}
      </div>
      <div className="Addressform-field inputForm">
        <label>State*</label>
        <input
          name="state"
          placeholder="Enter Your State"
          onChange={handleChange}
          value={values.state}
          type="text"
          required
        />
        {formErrors.state && <p>Invalid State</p>}
      </div>
      <div className="Addressform-field inputForm">
        <label>Zip Code*</label>
        <input
          name="zip"
          placeholder="Enter Your Zip Code"
          onChange={handleChange}
          value={values.zip}
          type="number"
          required
        />
        {formErrors.zip && <p>Invalid Zipcode</p>}
      </div>
      <div className="Addressform-field inputForm">
        <label>Country*</label>
        <Country countryValue={values.country} SetFormData={SetFormData} />
      </div>
      <div className="back-next">
        <Link to="/contact">
          <button className="prevbutton">Back</button>
        </Link>
        <Link to="/preview">
          <button
            className="nextbutton"
            disabled={
              !values.state ||
              !values.city ||
              !values.country ||
              !values.zip ||
              formErrors.city ||
              formErrors.country ||
              formErrors.state ||
              formErrors.zip
                ? true
                : false
            }
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddressDetails;
