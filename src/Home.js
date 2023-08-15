import React from "react";
import {Link} from "react-router-dom";


function Home() {
    return (
        <main>
            <section id="intro-placeholder">
                <aside className="about-little-lemon">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Homemade food from organic ingredients from local farm</p>
                    <Link className="yellow-button" to="/reservations">Reserve a table</Link>
                </aside>
                <div className="image-wrapper-about">
                    <img src="/photos/restauranfood.jpg" alt="restaurant food"/>
                </div>
            </section>

            <section id="specials-placeholder">
                <div className="header-container">
                    <h2 id="specials">This week specials!</h2>
                    <button className="yellow-button">order online</button>
                </div>

                <div className="articles-container">
                    <article>
                        <figure>
                            <img src="/photos/greek salad.jpg" alt="greek salad"/>
                            <figcaption>Greek salad $12.99</figcaption>
                        </figure>
                        <p>The famous greek salad...</p>
                        <Link className="yellow-button" to="#">Order a delivery...</Link>
                    </article>

                    <article>
                        <figure>
                            <img src="/photos/bruchetta.svg" alt="bruchetta"/>
                            <figcaption>Bruchetta $5.99</figcaption>
                        </figure>
                        <p>Our bruchetta is made from grilled bread...</p>
                        <Link className="yellow-button" to="#">Order a delivery...</Link>
                    </article>

                    <article>
                        <figure>
                            <img src="/photos/lemon dessert.jpg" alt="lemon dessert"/>
                            <figcaption>Greek salad $12.99</figcaption>
                        </figure>
                        <p>This comes straight from grandma's recipe book..</p>
                        <Link className="yellow-button" to="#">Order a delivery...</Link>
                    </article>
                </div>
            </section>


            {/*testimonials section*/}
            <section className="testimonials">
                <h2 className="what-our-customer-say">What Our Customers Say</h2>
                <div className="testimonial-container">
                <div className="testimonial">
                    <blockquote>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                    </blockquote>
                    <p className="testimonial-author">
                        <span className="testimonial-name">John Doe</span>
                        <span className="testimonial-rating" aria-label="Rated 5 out of 5 stars">
        ★★★★★
      </span>
                    </p>
                </div>

                <div className="testimonial">
                    <blockquote>
                        <p>"Vivamus in turpis in enim mollis iaculis eu vel lorem."</p>
                    </blockquote>
                    <p className="testimonial-author">
                        <span className="testimonial-name">Jane Smith</span>
                        <span className="testimonial-rating" aria-label="Rated 4 out of 5 stars">
        ★★★★☆
      </span>
                    </p>
                </div>

                    <div className="testimonial">
                        <blockquote>
                            <p>"Vivamus in turpis in enim mollis iaculis eu vel lorem."</p>
                        </blockquote>
                        <p className="testimonial-author">
                            <span className="testimonial-name">Henry Miller</span>
                            <span className="testimonial-rating" aria-label="Rated 4 out of 5 stars">
        ★★★★☆
      </span>
                        </p>
                    </div>

                    <div className="testimonial">
                        <blockquote>
                            <p>"Vivamus in turpis in enim mollis iaculis eu vel lorem."</p>
                        </blockquote>
                        <p className="testimonial-author">
                            <span className="testimonial-name">Salma Richardson</span>
                            <span className="testimonial-rating" aria-label="Rated 4 out of 5 stars">
        ★★★★☆
      </span>
                        </p>
                    </div>

                    <div className="testimonial">
                        <blockquote>
                            <p>"Vivamus in turpis in enim mollis iaculis eu vel lorem."</p>
                        </blockquote>
                        <p className="testimonial-author">
                            <span className="testimonial-name">Salma Richardson</span>
                            <span className="testimonial-rating" aria-label="Rated 4 out of 5 stars">
        ★★★★☆
      </span>
                        </p>
                    </div>


                </div>
            </section>
            {/*________________________________________________________________________________*/}
            <section id="photo-placeholder">
                <aside>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We cook nice dishes for all family</p>
                </aside>
                <div className="image-wrapper">
                    <img src="/photos/Mario%20and%20Adrian%20b.jpg" alt="restaurant food"/>
                    <img src="/photos/Mario and Adrian A.jpg" alt="our cookers"/>
                </div>
            </section>
        </main>
    );
}

export default Home;
