import styling from "./card.module.css"

const Card = (props) => {
    return (
        <div className={styling.card}>
            <img src="" alt="" />
            <h4>Name : {props.user.name}</h4>
            <p>Age : {props.user.age}</p>
            <p>Blood Group : {props.user.blood}</p>
            <p>Skills</p>

            {Object.keys(props.user.skills).map((item) => <p>{item}</p> )}

        </div>
    );
};

export default Card;