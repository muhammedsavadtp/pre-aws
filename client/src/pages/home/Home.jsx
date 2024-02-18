// Home.js

import React from "react";
import "./homeStyle.css"; // Import the CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <header>
                <h1>Welcome to Our Website</h1>
                <p>Discover, Connect, and Share</p>
            </header>
            <section className="main-content">
                <div className="feature">
                    <h2>Explore Exciting Content</h2>
                    <p>
                        Find and enjoy a variety of engaging content at your fingertips.
                    </p>
                </div>
                {/* <div className="cta-button">
                    <button>Join Now</button>
                </div> */}
            </section>
            <section className="about">
                <h2>About Us</h2>
                <p>
                    We are a passionate community dedicated to creating and sharing
                    meaningful experiences with each other. Join us on this journey!
                </p>
            </section>
            <footer>
                <p>&copy; 2024 Our Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
