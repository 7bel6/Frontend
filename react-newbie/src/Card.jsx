import profilePic from './assets/react.svg'
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile" />
            <h2>Haider</h2>
            <p>Pro Trader</p>
        </div>
    );
}

export default Card;