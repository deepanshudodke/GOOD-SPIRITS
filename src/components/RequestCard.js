import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RequestCard = ({ Donate, acceptor_id, index }) => {
    console.log("aaa" + index);
    let photos = Donate.photo.split(",");
    const [acceptor, SetAcceptor] = useState([]);
    useEffect(() => {
        async function fetchAcceptorDetails() {
            let response = await axios.get("http://localhost:1234/acceptor", {
                params: {
                    id: acceptor_id
                }
            });

            SetAcceptor(response.data.data);
        }
        fetchAcceptorDetails();
    }, [acceptor]);

    const handleAcceptor = async () => {
        const response = await axios.delete("http://localhost:1234/donate", {
            params: {
                id: Donate.id
            }
        });
    };
    return (
        <div className="request-card">
            <div className="request-main-img">
                <img src={"http://localhost:1234/uploads/" + photos[0]} />
            </div>

            <div className="request-content">
                <p>
                    Food Id - <span> {Donate.id} </span>
                </p>
                <p>
                    Food Name -{" "}
                    <span> {Donate.foodName.split(",").join(", ")} </span>
                </p>
                <p>
                    Acceptor Name - <span> {acceptor.name} </span>
                </p>
                <p>
                    Acceptor Email - <span> {acceptor.email} </span>
                </p>
                <p>
                    Acceptor No. - <span> {acceptor.phone} </span>
                </p>
                <p className="more-btn">
                    <Link onClick={handleAcceptor}>Accept &#11106;</Link>
                </p>
            </div>
        </div>
    );
};

export default RequestCard;
