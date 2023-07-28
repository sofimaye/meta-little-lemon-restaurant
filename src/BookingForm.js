import React, {useEffect, useState} from "react";

export default function BookingForm({availableTimes, updateTimes}) {
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        time: '12:00',
        guests: 1,
        occasion: 'birthday',
    });

    useEffect(() => {
        updateTimes(formData.date)
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
    };

    return (
        <div className="form">
            <h1 id="formTitle">Book now</h1>
            <form className="booking-form" onSubmit={handleSubmit}>
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
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}


