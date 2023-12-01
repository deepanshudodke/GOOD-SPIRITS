import "../css/About.css";
import peace from "../assets/peace.png";
const About = () => {
    return (
        <section className="container about">
            <img src={peace}></img>
            <div className="about-content">
                <p>
                    Welcome to <span>GOOD SPIRITS!</span> We are a dedicated
                    group of individuals working to reduce food waste and
                    distribute food to those in need. We believe that everyone
                    deserves access to nutritious food, and we're committed to
                    making that a reality.
                    <br></br>
                    <br></br>
                    Our food donation process is simple: individuals and
                    businesses can donate fresh, unexpired food to our
                    organization. We accept non-perishable items, fresh produce,
                    and other food items that are safe for consumption. Once we
                    receive donations, our team of volunteers works to sort,
                    organize, and distribute the food to local communities in
                    need.<br></br>
                    <br></br> We encourage you to get involved in our efforts!
                    Whether it's through volunteering your time or making a
                    donation, every contribution helps us make a difference in
                    the lives of those who need it most.<br></br>
                    <br></br> To learn more about our organization, please feel
                    free to contact us at <span>goodspirits@gmail.com</span>.
                    You can also follow us on social media to stay up-to-date on
                    our latest efforts and events. Thank you for visiting our
                    website and for your interest in reducing food waste and
                    helping those in need!
                </p>
            </div>
        </section>
    );
};

export default About;
