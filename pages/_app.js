import React from 'react';
import '../styles/globals.css';
import '../styles/booking-form.css';
import '../styles/UnderConstruction.css';
import '../styles/ConfirmedBooking.css';
import '../styles/404.css';
import Head from "next/head";
import Header from '../components/Header';
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <html lang="en"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Little Lemon Restaurant</title>
                <meta
                    name="description"
                    content="Italian cuisine restaurant"
                />
                <meta name="og:title" content="Little Lemon"/>
                <meta name="og:description" content="Family restaurant"/>
                <meta name="og:image" content="/photos/restauranfood.jpg"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:site_name" content="Little Lemon"/>
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp;