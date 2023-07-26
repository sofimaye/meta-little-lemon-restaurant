import React, {useState} from "react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        time: '12:00',
        guests: 1,
        occasion: 'birthday',
    });

    const [availableTimes, setAvailableTimes] = useState([
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can handle the submission, e.g., sending data to the server
    };
    console.log("Date", formData.date)

    return (
        <div className="form">
            <form className="booking-form" onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="time" value={formData.time} onChange={handleChange}>
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


