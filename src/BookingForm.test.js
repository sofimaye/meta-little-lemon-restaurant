import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";
import {MemoryRouter} from "react-router-dom";

test('check initializeTimes function', () => {
    render(
        <MemoryRouter>
            <BookingPage/>
        </MemoryRouter>
    );

    // got the form inputs
    const dateInput = screen.getByTestId('res-date');
    const time = screen.getByTestId('res-time');

    // Check if the date and time values are in the document
    expect(document.body.innerHTML).toContain(dateInput.value);
    expect(document.body.innerHTML).toContain(time.value);
})


//__________________________________________________________
describe('BookingForm', () => {
    test('Renders the BookingForm heading', () => {
        render(<MemoryRouter>
            <BookingPage/>
        </MemoryRouter>);
        const headingElement = screen.getByText('Book now');
        expect(headingElement).toBeInTheDocument();
    });

    test('Validates attributes for input fields', () => {
        render(<MemoryRouter>
            <BookingPage/>
        </MemoryRouter>);

        // First name input
        const firstNameInput = screen.getByLabelText('First name');
        expect(firstNameInput).toHaveAttribute('type', 'text');
        expect(firstNameInput).toHaveAttribute('id', 'res-name');
        expect(firstNameInput).toHaveAttribute('name', 'userName');
        expect(firstNameInput).toHaveAttribute('placeholder', 'Enter your username');
        expect(firstNameInput).toBeRequired();

        // Email input
        const emailInput = screen.getByLabelText('Email');
        expect(emailInput).toHaveAttribute('type', 'email');
        expect(emailInput).toHaveAttribute('id', 'res-email');
        expect(emailInput).toHaveAttribute('name', 'email');
        expect(emailInput).toHaveAttribute('placeholder', 'Enter your email');
        expect(emailInput).toBeRequired();

        // Phone input
        const phoneInput = screen.getByLabelText('Phone Number');
        expect(phoneInput).toHaveAttribute('type', 'tel');
        expect(phoneInput).toHaveAttribute('id', 'res-phone');
        expect(phoneInput).toHaveAttribute('name', 'phone');
        expect(phoneInput).toHaveAttribute('placeholder', 'Enter your phone number');
        expect(phoneInput).toBeRequired();

        // Date input
        const dateInput = screen.getByLabelText('Choose date');
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('id', 'res-date');
        expect(dateInput).toHaveAttribute('data-testid', 'res-date');
        expect(dateInput).toHaveAttribute('name', 'date');
        expect(dateInput).toHaveAttribute('value');

        // Time select
        const timeSelect = screen.getByLabelText('Choose time');
        expect(timeSelect).toHaveAttribute('id', 'res-time');
        expect(timeSelect).toHaveAttribute('data-testid', 'res-time');
        expect(timeSelect).toHaveAttribute('name', 'time');
        // expect(timeSelect).toHaveAttribute('value');
        expect(screen.getByDisplayValue(/1[2-9]:\d\d|20:00|21:00/)).toBeInTheDocument();

        // Number of guests input
        const guestsInput = screen.getByLabelText('Number of guests');
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('placeholder', '1');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
        expect(guestsInput).toHaveAttribute('id', 'guests');
        expect(guestsInput).toHaveAttribute('name', 'guests');
        expect(guestsInput).toHaveAttribute('value');
    });
});