import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingPage from "./BookingPage";
import {MemoryRouter} from "react-router-dom";
import {isValidDateValue} from "@testing-library/user-event/dist/utils";

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

//a unit test for both valid and invalid states to ensure good test coverage of code

describe('Testing valid states of inputs after initial load', () => {
    test('Initial page load', () => {
        render(<MemoryRouter>
            <BookingPage/>
        </MemoryRouter>);

        // First name input
        const firstNameInput = screen.getByTestId("res-name")
        expect(firstNameInput.value).toMatch("");

        // Email input
        const emailInput = screen.getByTestId("res-email");
        expect(emailInput.value).toMatch("");

        // Phone input
        const phoneInput = screen.getByTestId("res-phone");
        expect(phoneInput.value).toMatch("");

        // Date input
        const dateInput = screen.getByTestId('res-date');
        // Check if the value of the date input matches the expected format 'yyyy-mm-dd'
        const dateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
        expect(dateInput.value).toMatch(dateRegex)

        // Time select
        const timeSelect = screen.getByTestId('res-time');
        const timeRegex = /1[2-9]:\d\d|20:00|21:00/;
        expect(timeSelect.value).toMatch(timeRegex);

        // Number of guests input
        const guestsInput = screen.getByTestId('guests');
        const guestsRegex = /[1-9]|10/;
        expect(guestsInput.value).toMatch(guestsRegex);
    });
});



describe('Testing valid states of inputs after the user activities', () => {
    test('User enters valid inputs', () => {
        render(<MemoryRouter>
            <BookingPage/>
        </MemoryRouter>);

        // First name input
        const firstNameInput = screen.getByTestId("res-name");
        userEvent.type(firstNameInput, "John");
        expect(firstNameInput).toHaveValue("John");

        // Email input
        const emailInput = screen.getByTestId("res-email");
        userEvent.type(emailInput, "john@example.com");
        expect(emailInput).toHaveValue("john@example.com");

        // Phone input
        const phoneInput = screen.getByTestId("res-phone");
        userEvent.type(phoneInput, "123456789");
        expect(phoneInput).toHaveValue("123456789");

        // Date input
        const dateInput = screen.getByTestId('res-date');
        userEvent.type(dateInput, "2023-08-07");
        expect(dateInput).toHaveValue("2023-08-07");

        // Time select
        const timeSelect = screen.getByTestId('res-time');
        userEvent.type(timeSelect, "12:00");
        expect(timeSelect).toHaveValue("12:00");

        // Number of guests input
        const guestsInput = screen.getByTestId('guests');
        userEvent.clear(guestsInput)
        userEvent.type(guestsInput, "1");
        expect(Number(guestsInput.value)).toBe(1);
    });
});


