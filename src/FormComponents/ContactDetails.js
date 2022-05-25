import React from 'react';
import { Link } from 'react-router-dom';

const ContactDetails = ({ handleChange, values, formErrors }) => {
  return (
    <div className="Contactform-container">
      <h3 className="Contactform-header">Contact Details</h3>
      <div className="Contactform-field">
        <label>Email*</label>
        <input
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          value={values.email}
          type="email"
          required
        />
        {formErrors.email && <p>Invalid email</p>}
      </div>
      <div className="Contactform-field">
        <label>Phone*</label>
        <input
          name="phoneNumber"
          placeholder="Enter Your Phone"
          onChange={handleChange}
          value={values.phoneNumber}
          type="number"
          required
        />
        {formErrors.phoneNumber && (
          <p>Phone Number must contain 10 digits only</p>
        )}
      </div>

      <div className="back-next">
        <Link to="/">
          <button className="prevbutton">Back</button>
        </Link>
        <Link to="/address">
          <button
            disabled={
              !values.email ||
              !values.phoneNumber ||
              formErrors.email ||
              formErrors.phoneNumber
                ? true
                : false
            }
            className="nextbutton"
          >
            next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
