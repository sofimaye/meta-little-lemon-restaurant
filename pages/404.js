import React from "react";
import Link from 'next/link'

export default function FourOhFour() {
    return (
        <div id="fourOfour">
        <h1>404 - Page Not Found</h1>
        <Link href="/" id="back-home">
                Go back home
        </Link>
        </div>
    )
}