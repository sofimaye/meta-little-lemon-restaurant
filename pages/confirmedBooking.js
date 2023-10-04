import React from "react";

export default function confirmedBooking() {
    return (
        <div className="confirmation-container">
        <div className="confirmed-booking">
            <svg
                className="confirmation-image"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
            >
                <circle cx="50" cy="50" r="45" fill="#F4CE14" />
                <path
                    d="M28 49.9L42 63.9 73.3 32.5 68.7 28 42 54.7z"
                    fill="#808080"
                />
            </svg>
            <h2>Your Booking Has Been Confirmed</h2>
            <p>Thank you for choosing us! We look forward to serving you.</p>
        </div>
        </div>
    );
}
