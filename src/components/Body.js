import React from "react";
import "../css/Body.css";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero5 from "../assets/hero5.jpg";
import main from "../assets/main.jpg";
import timeline1 from "../assets/timeline1.jpg";
import timeline2 from "../assets/timeline2.jpg";
import timeline3 from "../assets/timeline3.jpg";
import timeline4 from "../assets/timeline4.jpg";
import timeline5 from "../assets/timeline5.jpg";
import timeline6 from "../assets/timeline6.jpg";

const Body = () => {
    return (
        <section className="container home">
            <div className="top-text">
                <h1>
                    <span className="span-1">Humanity</span> Above{" "}
                    <span className="span-2">Religion</span>
                </h1>
                <p>
                    <span>People</span> is a humanitarian platform that carries
                    the concept of sharing for fellow human beings. Through{" "}
                    <span>People</span>, you can donate to people in needor open
                    your own donation campaign. Let's start donating!
                </p>
                <div className="big-hero-img">
                    <div className="main-right-img-text">
                        <h2>
                            “If you cannot feed a <span>hundred</span> People,
                            <br></br> then feed just{" "}
                            <span className="asdf">one</span>”
                        </h2>
                        <p>
                            <a href="#">Donate Now</a>
                        </p>
                    </div>
                </div>
            </div>
            <section id="timeline">
                <h1>A GoodSpirit Timeline</h1>
                <p className="leader">
                    Join the Good Spirit Brigade: Helping Those in Need with
                    Food Donations
                </p>
                <div className="demo-card-wrapper">
                    <div className="demo-card demo-card--step1">
                        <div className="head">
                            <div className="number-box">
                                <span>01</span>
                            </div>
                            <h2>
                                <span className="small">Sharey</span>SIGN UP /
                                SIGN IN
                            </h2>
                        </div>
                        <div className="body">
                            <p>
                                Creating an account on our website is a simple
                                and effective way to get involved and make a
                                difference in the lives of those in need. By
                                creating an account, you'll be able to receive
                                updates on the impact of your contributions, and
                                be eligible for rewards and recognition
                                programs.
                            </p>
                            <img src={timeline1} alt="Graphic"></img>
                        </div>
                    </div>

                    <div className="demo-card demo-card--step2">
                        <div className="head">
                            <div className="number-box">
                                <span>02</span>
                            </div>
                            <h2>
                                <span className="small">FeedJoy</span> Donate
                                FOod
                            </h2>
                        </div>
                        <div className="body">
                            <p>
                                Do you have extra food that you won't be able to
                                consume? Don't let it go to waste! Instead,
                                consider donating it to our cause. We accept all
                                types of non-perishable and perishable food
                                items.
                            </p>
                            <img src={timeline2} alt="Graphic"></img>
                        </div>
                    </div>

                    <div className="demo-card demo-card--step4">
                        <div className="head">
                            <div className="number-box">
                                <span>03</span>
                            </div>
                            <h2>
                                <span className="small">HungerEnds</span> Spread
                                the word
                            </h2>
                        </div>
                        <div className="body">
                            <p>
                                Help us spread the word about our initiative! By
                                sharing our cause on social media and through
                                word of mouth, you can help us reach a wider
                                audience and make a bigger impact. Use our
                                hashtags and handles to share our message with
                                your friends and family.
                            </p>
                            <img src={timeline3}></img>
                        </div>
                    </div>

                    <div className="demo-card demo-card--step3">
                        <div className="head">
                            <div className="number-box">
                                <span>04</span>
                            </div>
                            <h2>
                                <span className="small">NutriServe</span>{" "}
                                Volunteering
                            </h2>
                        </div>
                        <div className="body">
                            <p>
                                We're always looking for enthusiastic volunteers
                                who can help us with various tasks, such as
                                collecting, sorting, and distributing donated
                                food. You don't need any specific skills to
                                volunteer with us, just a passion for helping
                                others.
                            </p>
                            <img src={timeline4}></img>
                        </div>
                    </div>

                    <div className="demo-card demo-card--step5">
                        <div className="head">
                            <div className="number-box">
                                <span>05</span>
                            </div>
                            <h2>
                                <span className="small">MealBridge</span>{" "}
                                Educate
                            </h2>
                        </div>
                        <div className="body">
                            <p>
                                We believe that education is key to ending food
                                waste and hunger. We provide resources and
                                information on food waste, hunger, and poverty
                                to help people understand the impact of their
                                actions and how they can make a difference.
                            </p>
                            <img src={timeline5}></img>
                        </div>
                    </div>

                    <div className="demo-card demo-card--step6">
                        <div className="head">
                            <div className="number-box">
                                <span>06</span>
                            </div>
                            <h2>
                                <span className="small">FoodWise</span>{" "}
                                Collaborate
                            </h2>
                        </div>
                        <div className="body">
                            <p>
                                Collaboration is essential to ending food waste
                                and hunger. We welcome individuals,
                                organizations, and businesses to collaborate
                                with us to make a bigger impact. If you're
                                interested in collaborating with us, please
                                visit our website to learn more.
                            </p>
                            <img src={timeline6}></img>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Body;
