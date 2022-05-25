import React from 'react';
import { Link } from 'react-router-dom';

const ReviewForm = ({ values }) => {
  return (
    <div className="ReviewForm ">
      <h3 className="ReviewForm-header">Review your data</h3>
      <table className="ReviewForm-data">
        <tbody>
          <tr>
            <td>First name:</td>
            <td>{values.firstName}</td>
          </tr>
          <tr>
            <td>Last name:</td>
            <td>{values.lastName}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{values.age}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{values.gender}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{values.email}</td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td>{values.phoneNumber}</td>
          </tr>
          <tr>
            <td>City:</td>
            <td>{values.city}</td>
          </tr>
          <tr>
            <td>Zip Code:</td>
            <td>{values.zip}</td>
          </tr>
          <tr>
            <td>State:</td>
            <td>{values.state}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{values.country}</td>
          </tr>
        </tbody>
      </table>
      <div className="back-next">
        <Link to="/address">
          <button className="prevbutton">Back</button>
        </Link>
        <button
          className="Submitbutton"
          onClick={(e) => {
            alert('Form Submitted');
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
