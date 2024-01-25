import "../css/Footer.css";
const Footer = () => {
    return (
        <>
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-7">
                        <p
                            className="mb-0 f_400"
                            style={{
                                textAlign: "center",
                                marginBottom: 10,
                                opacity: 0.5
                            }}
                        >
                            @ Goodspirits Inc.. 2023 All rights reserved. Made
                            by
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
