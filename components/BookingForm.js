import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import Error from "../pages/_error";


export default function BookingForm({availableTimes, updateTimes, submitAPI}) {
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
    const navigate = useRouter();

    useEffect(() => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        const tomorrow = currentDate.toISOString().split('T')[0];

        if (availableTimes.length === 0) {
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
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // sending data to server can be handled here
            const success = submitAPI(formData);
            if (success) {
                try {
                    await navigate.push("/confirmedBooking");
                } catch (error) {
                    setErrors((prevErrors) => ({...prevErrors, pageNotFound: 'Page not found'}));
                }
            }
        }
    };


    const validateForm = (data) => {
        const errors = {};
        if (isValidUserName(data.userName) === false) {
            errors.userName = "Invalid user name";
        }
        if (isValidDateValue(data.date) === false) {
            errors.date = 'Invalid date';
        }
        if (isValidNumberOfGuests(data.guests) === false) {
            errors.guests = 'Invalid number of guests';
        }
        if (isValidPhoneNumber(data.phone) === false) {
            errors.phone = 'Invalid phone number';
        }
        return errors
    }
    const isValidUserName = (userName) => {
        const userNameRegex = /^[a-zA-Z]{1,30}$/;
        return userNameRegex.test(userName)
    }

    const isValidPhoneNumber = (phoneNumber) => {
        // Basic validation for a 10-digit phone number
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    const isValidDateValue = (date) => {
        const dateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
        return dateRegex.test(date)
    }

    const isValidNumberOfGuests = (numberOfGuests) => {
        const guestsRegex = /^(?:[1-9]|10)$/;
        return guestsRegex.test(numberOfGuests)
    }

    return (
        <>
            {errors?.pageNotFound === 'Page not found' ? <Error/> :
                (<div className="form">
                        <h1 id="formTitle">Book now</h1>
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <>
                                <label htmlFor="res-name">First name</label>
                                <input type="text"
                                       id="res-name"
                                       data-testid="res-name"
                                       name="userName"
                                       value={formData.userName}
                                       onChange={handleChange}
                                       placeholder="Enter your username"
                                       required/>
                                {errors.userName &&
                                    <div className="error" data-testid="res-name-error">{errors.userName}</div>}
                            </>
                            <label htmlFor="res-email">Email</label>
                            <input type="email"
                                   id="res-email"
                                   data-testid="res-email"
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
                                       data-testid="res-phone"
                                       name="phone"
                                       value={formData.phone}
                                       onChange={handleChange}
                                       placeholder="Enter your phone number"
                                       required
                                />
                                {errors.phone &&
                                    <div className="error" data-testid='res-phone-error'>{errors.phone}</div>}
                            </>
                            <>
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
                                {errors.date && <div className="error" data-testid='res-date-error'>{errors.date}</div>}
                            </>

                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time" data-testid="res-time" name="time" value={formData.time}
                                    onChange={handleChange}>
                                {availableTimes.map((timeOption) => (
                                    <option key={timeOption} value={timeOption}>
                                        {timeOption}
                                    </option>
                                ))}
                            </select>
                            <>
                                <label htmlFor="guests">Number of guests</label>
                                <input
                                    type="number"
                                    placeholder="1"
                                    min="1"
                                    max="10"
                                    id="guests"
                                    data-testid="res-guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                />
                                {errors.guests &&
                                    <div className="error" data-testid='res-guests-error'>{errors.guests}</div>}
                            </>

                            <label htmlFor="occasion">Occasion</label>
                            <select
                                id="occasion"
                                data-testid="occasion"
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
                            <div className="button-container">
                                <input className="yellow-button" type="submit" value="Submit" data-testid="submit"/>
                            </div>
                        </form>
                    </div>
                )
            }
        </>
    )
};


