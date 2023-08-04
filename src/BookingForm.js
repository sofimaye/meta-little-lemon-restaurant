import React, {useEffect, useState} from "react";
import {submitAPI} from "./utils/fakeAPI";
import {useNavigate} from "react-router-dom";


export default function BookingForm({availableTimes, updateTimes}) {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        phone: "",
        date: new Date().toISOString().split('T')[0],
        time: '12:00',
        guests: 1,
        occasion: 'birthday',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        const tomorrow = currentDate.toISOString().split('T')[0];

        if(availableTimes.length === 0){
            updateTimes(tomorrow);
            setFormData((prevData) => ({
                ...prevData,
                date: tomorrow,
            }));
        }
    }, []);

    const handleDateSelected = (date) => {
        updateTimes(date);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form data submitted:', formData);
            // sending data to server can be handled here
            const success = submitAPI(formData);
            if (success){
                navigate("/reservations/confirmation");
            }
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if(isValidPhoneNumber(data.phone) === false){
            errors.phone = 'Invalid phone number';
            console.log("ERRORS PHONE: ", errors.phone)
        }
        return errors
    }

    const isValidPhoneNumber = (phoneNumber) => {
        // Basic validation for a 10-digit phone number
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    return (
        <div className="form">
            <h1 id="formTitle">Book now</h1>
            <form className="booking-form" onSubmit={handleSubmit}>
                <>
                <label htmlFor="res-name">First name</label>
                <input type="text"
                       id="res-name"
                       name="userName"
                       value={formData.userName}
                       onChange={handleChange}
                       placeholder="Enter your username"
                       required/>
                {errors.userName && <div className="error">{errors.userName}</div>}
                </>
                <label htmlFor="res-email">Email</label>
                <input type="email"
                       id="res-email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       placeholder="Enter your email"
                       required

                />
                <>
                <label htmlFor="res-phone">Phone Number</label>
                <input type="tel"
                       id="res-phone"
                       name="phone"
                       value={formData.phone}
                       onChange={handleChange}
                       placeholder="Enter your phone number"
                       required
                />
                {errors.phone && <div className="error">{errors.phone}</div>}
                </>

                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    data-testid="res-date"
                    name="date"
                    value={formData.date}
                    onChange={e => {
                        handleChange(e);
                        handleDateSelected(e.target.value);
                    }}
                />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" data-testid="res-time" name="time" value={formData.time} onChange={handleChange}>
                    {availableTimes.map((timeOption) => (
                        <option key={timeOption} value={timeOption}>
                            {timeOption}
                        </option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                />

                        <label htmlFor="occasion">Occasion</label>
                        <select
                            id="occasion"
                            name="occasion"
                            value={formData.occasion}
                            onChange={handleChange}
                        >
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Dinner</option>
                            <option>Romantic dinner</option>
                            <option>Lunch</option>
                            <option>Other</option>
                        </select>

                <label htmlFor="submit">Make your reservation</label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}


