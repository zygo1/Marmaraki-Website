import "./Divider.css"


const Divider = (props) => {

    return (
        <>
            <div className="section-divider"> <span className="section-label">{props.name}</span></div>
        </>
    )
};


export default Divider;