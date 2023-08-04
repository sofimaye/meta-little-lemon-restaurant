import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";
import {MemoryRouter} from "react-router-dom";

test('Renders the BookingForm heading', () => {
    render(<BookingPage/>);
    const headingElement = screen.getByText("Book now");
    expect(headingElement).toBeInTheDocument();
})

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
