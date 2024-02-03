import './styles/Card.css';

function Card(props){

    return(

        <div className="card">
            <img src="" alt="shop logo" className="shop-logo" />
            <h2 className="shop-name">{props.shopName}</h2>
            <h3 className="extended-info">{ props.extendInfo }</h3>
            <p className="piarInfo">{ props.piarInfo }</p>
            <a href='/' className="open-site">More Info</a>
        </div>

    );
}
export default Card;