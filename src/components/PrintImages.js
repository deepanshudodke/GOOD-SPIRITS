const PrintImages = (prop) => {
    console.log(prop.img);
    return (
        <img
            className="food-photo"
            src={"http://localhost:1234/uploads/" + prop.img}
        />
    );
};

export default PrintImages;
