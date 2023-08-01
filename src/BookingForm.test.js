import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "./BookingPage";

test('Renders the BookingForm heading', () => {
    render(<BookingPage/>);
    const headingElement = screen.getByText("Book now");
    expect(headingElement).toBeInTheDocument();
})

test('check initializeTimes function', () => {
    render(<BookingPage/>);

    // got the form inputs
    const dateInput = screen.getByTestId('res-date');
    const time = screen.getByTestId('res-time');

    // fill in form input
    fireEvent.input(dateInput, {target: { value: new Date().toISOString().split('T')[0]}});
    expect(parseInt(time.value.split(':')[0])).toBeGreaterThan(new Date().getHours())
})