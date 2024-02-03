import Header from "./components/Header";
import Card from "./components/Card";
import Filter from "./components/Filter";

import './components/styles/Card.css';

export default function Shoppage(){
    
    return (
        <>
        <Header/>
        <div className="shop-card">
            <Filter />
        <Card
                shopName={"Lenta"}
                extendInfo={"more time"}
                piarInfo={"knock-knock"}
            />
        <Card
            shopName={"Lenta"}
            extendInfo={"more time"}
            piarInfo={"knock-knock"}
            />
        <Card
            shopName={"Lenta"}
            extendInfo={"more time"}
            piarInfo={"knock-knock"}
            />

        </div>
        
        </>
    );
}