import React from "react";
import "../css/Service.css";
import hero1 from "../assets/hero1.png";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import foodRecovery from "../assets/food_recovery.jpg";
function Service() {
    return (
        <section className="container service">
            <h1 className="main-header">OUR SERVICES</h1>
            <div className="main-service">
                <div
                    class="card"
                    style={{ transform: "rotate(-2.1909876702248923deg)" }}
                >
                    <img src={foodRecovery} />
                    <h2>Food Recovery</h2>
                    <p>
                        We collect excess food from restaurants, grocery stores,
                        and other businesses and redistribute it to those in
                        need. Our food recovery service helps reduce food waste
                        while providing meals to people.
                    </p>
                </div>
                <div
                    class="card"
                    style={{ transform: "rotate(-1.3561238508033013deg)" }}
                >
                    <img src={hero3} />
                    <h2>Food Donations</h2>
                    <p>
                        We encourage individuals and businesses to donate food
                        to our organization. You can drop off donations at our
                        facility during business hours or arrange for a pick-up
                        service for larger donations.
                    </p>
                </div>

                <div
                    class="card"
                    style={{
                        transform: "transform:rotate(-0.859691042874311deg)"
                    }}
                >
                    <img src={hero1} />
                    <h2>Food Education</h2>
                    <p>
                        We believe that education is key to reducing food waste
                        and promoting healthy eating habits. Our blog offers
                        resources and information on food waste reduction,
                        nutrition, and other related topics.
                    </p>
                </div>
                <div
                    class="card"
                    style={{ transform: "rotate(2.0601396143539823deg)" }}
                >
                    <img src={hero5} />
                    <h2>Fundraising</h2>
                    <p>
                        As a non-profit organization, we rely on donations to
                        continue our work. You can make a one-time or recurring
                        donation through our website, or you can get involved in
                        one of our fundraising events or campaigns.
                    </p>
                </div>
            </div>

            {/* <div class="blog-card">
                <div class="meta">
                    <div
                        class="photo"
                        style={{ backgroundImage: `url(${foodRecovery})` }}
                    ></div>
                </div>
                <div class="description">
                    <h1>Food Recovery</h1>
                    <h2>"Think, Eat, Save"</h2>
                    <p>
                        {" "}
                        We collect excess food from restaurants, grocery stores,
                        and other businesses and redistribute it to those in
                        need. Our food recovery service helps reduce food waste
                        while providing nutritious meals to people who may not
                        have access to them otherwise.
                    </p>
                </div>
            </div>
            <div class="blog-card">
                <div class="meta">
                    <div
                        class="photo"
                        style={{ backgroundImage: `url(${hero3})` }}
                    ></div>
                </div>
                <div class="description">
                    <h1>Food Donations</h1>
                    <h2>"Think, Eat, Save"</h2>
                    <p>
                        {" "}
                        We encourage individuals and businesses to donate food
                        to our organization. You can drop off donations at our
                        facility during business hours or arrange for a pick-up
                        service for larger donations. We accept non-perishable
                        items, fresh produce, and other food items that are safe
                        for consumption.
                    </p>
                </div>
            </div>

            <div class="blog-card">
                <div class="meta">
                    <div
                        class="photo"
                        style={{ backgroundImage: `url(${hero5})` }}
                    ></div>
                </div>
                <div class="description">
                    <h1>Volunteer Opportunities</h1>
                    <h2>Opening a door to the future</h2>
                    <p>
                        {" "}
                        We rely on the support of volunteers and NGO's to carry
                        out our mission. Whether it's sorting and organizing
                        food donations, assisting with food distribution, or
                        helping with fundraising and outreach efforts, there are
                        many ways to get involved. Visit our volunteer page to
                        learn more about current opportunities.
                    </p>
                </div>
            </div>

            <div class="blog-card">
                <div class="meta">
                    <div
                        class="photo"
                        style={{ backgroundImage: `url(${hero4})` }}
                    ></div>
                </div>
                <div class="description">
                    <h1>Food Education</h1>
                    <h2>Opening a door to the future</h2>
                    <p>
                        {" "}
                        We believe that education is key to reducing food waste
                        and promoting healthy eating habits. Our blog offers
                        resources and information on food waste reduction,
                        nutrition, and other related topics. We also offer
                        workshops and training sessions for community members
                        who are interested in learning more.
                    </p>
                </div>
            </div>

            <div class="blog-card">
                <div class="meta">
                    <div class="photo"></div>
                </div>
                <div class="description">
                    <h1>Fundraising</h1>
                    <h2>Opening a door to the future</h2>
                    <p>
                        {" "}
                        As a non-profit organization, we rely on donations to
                        continue our work. You can make a one-time or recurring
                        donation through our website, or you can get involved in
                        one of our fundraising events or campaigns.
                    </p>
                </div>
            </div> */}
        </section>
    );
}

export default Service;
