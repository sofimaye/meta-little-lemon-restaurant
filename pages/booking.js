'use client'
import React, {useReducer} from "react";
import BookingForm from "../components/BookingForm";
import {fetchAPI} from "./api/fakeAPI";

export default function booking(){

    const initializeTimes = () => fetchAPI(new Date().toISOString().split('T')[0]);
    const updateTimes = (_, date) => fetchAPI(date);
    const submitAPI = formData => true;

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


    return (
        <>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitAPI={submitAPI}/>
        </>
    );
}

