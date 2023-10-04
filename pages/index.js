import React from "react";
import Link from "next/link";

function Section({ id, children }) {
    return <section id={id}>{children}</section>;
}

function Article({ src, alt, caption, description }) {
    return (
        <article>
            <figure>
                <img src={src} alt={alt} loading="lazy" />
                <figcaption>{caption}</figcaption>
            </figure>
            <p>{description}</p>
            <Link className="yellow-button" href="#">
                Order a delivery...
            </Link>
        </article>
    );
}

function Testimonial({ text, author, rating }) {
    return (
        <div className="testimonial">
            <blockquote>
                <p>{text}</p>
            </blockquote>
            <p className="testimonial-author">
                <span className="testimonial-name">{author}</span>
                <span className="testimonial-rating" aria-label={`Rated ${rating} out of 5 stars`}>
          {rating}
        </span>
            </p>
        </div>
    );
}

export default function Home() {
    return (
        <main>
            <Section id="intro-placeholder">
                <aside className="about-little-lemon">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Homemade food from organic ingredients from a local farm</p>
                    <Link className="yellow-button" href="/pages/booking">
                        Reserve a table
                    </Link>
                </aside>
                <div className="image-wrapper-about">
                    <img src="/photos/restauranfood.jpg" alt="restaurant food" />
                </div>
            </Section>

            <Section id="specials-placeholder">
                <div className="header-container">
                    <h2 id="specials">This week specials!</h2>
                    <button className="yellow-button">order online</button>
                </div>

                <div className="articles-container">
                    <Article
                        src="/photos/greeksalad_sm.jpg"
                        alt="greek salad"
                        caption="Greek salad $12.99"
                        description="The famous Greek salad..."
                    />
                    <Article
                        src="/photos/bruchetta.jpg"
                        alt="bruchetta"
                        caption="Bruchetta $5.99"
                        description="Our bruchetta is made from grilled bread..."
                    />
                    <Article
                        src="/photos/lemon dessert.jpg"
                        alt="lemon dessert"
                        caption="Greek salad $12.99"
                        description="This comes straight from grandma's recipe book.."
                    />
                </div>
            </Section>

            <Section id="testimonials-placeholder">
                <h2 className="what-our-customer-say">What Our Customers Say</h2>
                <div className="testimonial-container">
                    <Testimonial text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." author="John Doe" rating="★★★★★" />
                    <Testimonial text="Vivamus in turpis in enim mollis iaculis eu vel lorem." author="Jane Smith" rating="★★★★☆" />
                    <Testimonial text="Vivamus in turpis in enim mollis iaculis eu vel lorem." author="Henry Miller" rating="★★★★☆" />
                    <Testimonial text="Vivamus in turpis in enim mollis iaculis eu vel lorem." author="Salma Richardson" rating="★★★★☆" />
                    <Testimonial text="Vivamus in turpis in enim mollis iaculis eu vel lorem." author="Salma Richardson" rating="★★★★☆" />
                </div>
            </Section>

            <Section id="photo-placeholder">
                <aside>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We cook nice dishes for all family</p>
                </aside>
                <div className="image-wrapper">
                    <img src="/photos/restaurant.jpg" alt="restaurant food" />
                    <img src="/photos/Mario and Adrian A.jpg" alt="our cookers" />
                </div>
            </Section>
        </main>
    );
};
