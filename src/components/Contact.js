import "../css/Contact.css";

const Contact = () => {
    return (
        <>
            <section className="container contactus">
                <form className="form">
                    <h2>CONTACT US</h2>
                    <p type="Name:">
                        <input placeholder="Write your name here.."></input>
                    </p>
                    <p type="Email:">
                        <input placeholder="Let us know how to contact you back.."></input>
                    </p>
                    <p type="Message:">
                        <input placeholder="What would you like to tell us.."></input>
                    </p>
                    <button>Send Message</button>
                    <div>
                        <span className="fa fa-phone"></span>9174315342
                        <span className="fa fa-envelope-o"></span>{" "}
                        goodspirits@gmail.com
                    </div>
                </form>
            </section>
        </>
    );
};

export default Contact;
