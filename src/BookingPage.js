import React, {useReducer} from "react";
import BookingForm from "./BookingForm";

export default function BookingPage(){
    const initializeTimes = () => [
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
    ];

    const parseHour = (time) => parseInt(time.split(':')[0]);

    const updateTimes = (_, date) => {
        const now = new Date();
        const today = now.toISOString().split('T')[0];
        if (date === today){
            return initializeTimes().filter((time) => parseHour(time) > now.getHours())
        }else{
            return initializeTimes();
        }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div>
            <h1>Table Booking App</h1>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </div>
    );
}