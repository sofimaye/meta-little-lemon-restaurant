import React, {useReducer} from "react";
import BookingForm from "./BookingForm";
import {fetchAPI} from "./utils/fakeAPI";

export default function BookingPage(){
    const initializeTimes = () => fetchAPI(new Date().toISOString().split('T')[0]);
    const updateTimes = (_, date) => fetchAPI(date)

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </>
    );
}