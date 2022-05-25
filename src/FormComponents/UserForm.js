import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import ContactDetails from './ContactDetails';
import AddressDetails from './AddressDetails';
import ReviewForm from './ReviewForm';
import { Routes, Route } from 'react-router-dom';

const UserForm = () => {
  const [formData, SetFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'male',
    phoneNumber: '',
    email: '',

    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const [formErrors, SetFormErrors] = useState({
    firstName: false,
    lastName: false,
    age: false,
    phoneNumber: false,
    email: false,
    gender: false,
    city: false,
    state: false,
    zip: false,
    country: false,
  });

  // HandleChange for the controlled elements and Form Validation

  const handleChange = (e) => {
    const conditions = {
      firstName: /^[A-Za-z]+$/,
      lastName: /^[A-Za-z]+$/,
      email: /\S+@\S+\.\S+/,
      phoneNumber: /^\d{10}$/,
      state: /^[a-zA-Z\s]*$/,
      city: /^[a-zA-Z\s]*$/,
      country: /^[a-zA-Z\s]*$/,
      zip: /^\d{5}(?:[- ]?\d{4})?$/,
    };

    if (e.target.name === 'age') {
      if (e.target.value < 1 || e.target.value > 150) {
        SetFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        SetFormErrors((prevState) => ({
          ...prevState,
          [e.target.name]: true,
        }));
      } else {
        SetFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        SetFormErrors((prevState) => ({
          ...prevState,
          [e.target.name]: false,
        }));
      }
    } else if (conditions[e.target.name]) {
      if (conditions[e.target.name].test(e.target.value)) {
        if (formErrors[e.target.name]) {
          SetFormErrors((prevState) => ({
            ...prevState,
            [e.target.name]: false,
          }));
        }
      } else {
        SetFormErrors((prevState) => ({
          ...prevState,
          [e.target.name]: true,
        }));
      }
      SetFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else if (!conditions[e.target.name]) {
      SetFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <div className="form-container">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <PersonalDetails
              handleChange={handleChange}
              values={formData}
              formErrors={formErrors}
              SetFormErrors={SetFormErrors}
            />
          }
        />
        <Route
          path="address"
          element={
            <AddressDetails
              SetFormData={SetFormData}
              handleChange={handleChange}
              values={formData}
              formErrors={formErrors}
            />
          }
        />

        <Route
          path="contact"
          element={
            <ContactDetails
              handleChange={handleChange}
              values={formData}
              formErrors={formErrors}
            />
          }
        />
        <Route path="preview" element={<ReviewForm values={formData} />} />
      </Routes>
      ;
    </div>
  );
};

export default UserForm;
