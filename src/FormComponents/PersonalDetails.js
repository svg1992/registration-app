import React from 'react';
import { Link } from 'react-router-dom';

const PersonalDetails = ({ handleChange, values, formErrors }) => {
    return (
        <div className="Personalform-container">
            <h3 className="Personalform-header">Personal Details</h3>
            <div className="Personalform-field">
                <label>First Name*</label>
                <input
                    name="firstName"
                    type="text"
                    placeholder="Enter Your First Name"
                    onChange={handleChange}
                    value={values.firstName}
                    required
                />

                {formErrors.firstName && (
                    <p>Name must be only string without white spaces</p>
                )}
            </div>
            <div className="Personalform-field">
                <label>Last Name*</label>
                <input
                    name="lastName"
                    type="text"
                    placeholder="Enter Your Last Name"
                    onChange={handleChange}
                    required
                    value={values.lastName}
                />
                {formErrors.lastName && (
                    <p>Name must be only string without white spaces</p>
                )}
            </div>
            <div className="Personalform-field">
                <label>Age*</label>
                <input
                    name="age"
                    type="number"
                    placeholder="Enter Your Age"
                    onChange={handleChange}
                    required
                    value={values.age}
                />
                {formErrors.age && <p> Age must be betwwen 0 to 150.</p>}
            </div>
            <div className="Personalform-field">
                <label>Gender*</label>
                <span>
                    <input
                        type="radio"
                        name="gender"
                        value={'male'}
                        onChange={handleChange}
                        checked={values.gender === 'male'}
                    />
                    {'Male'}
                </span>
                <span>
                    <input
                        type="radio"
                        name="gender"
                        value={'female'}
                        onChange={handleChange}
                        checked={values.gender === 'female'}
                    />
                    {'female'}
                </span>
                <span>
                    <input
                        type="radio"
                        name="gender"
                        value={'other'}
                        onChange={handleChange}
                        checked={values.gender === 'other'}
                    />
                    {'Other'}
                </span>
            </div>
            <div className="back-next next">
                <Link to="/contact">
                    <button
                        disabled={
                            !values.firstName ||
                                !values.lastName ||
                                !values.age ||
                                formErrors.firstName ||
                                formErrors.lastName ||
                                formErrors.age
                                ? true
                                : false
                        }
                        className="nextbutton"
                    >
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PersonalDetails;
