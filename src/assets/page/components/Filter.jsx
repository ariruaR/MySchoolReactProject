import './styles/Filter.css'
import React, { useState} from 'react';


function Filter(){


    const [dropboxValue, setDropboxValue] = useState('');
    function GetDropboxValue(){
        
    }


    return(

        <>
            <div className="filter">
                <select className='dropbox'>
                    <option value="popular">По популярности</option>
                    <option value="rating">По рейтингу</option>
                    <option value="price-low">По цене возрастает</option>
                    <option value="price=high">По цене убывает</option>
                </select> 
            </div>
        </>

    );
}

export default Filter;