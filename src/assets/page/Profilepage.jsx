import Header from "./components/Header";
import './components/styles/Profile.css'

function Profilepage(props){
    return (
        props.auth ?
        <>
        <Header />

        <div className="profile">
            <div className="mini-profile">
                <img src="" alt="profile img" />
                <h1 className="username">{props.username}</h1>
                <div className="status-dropdown">
                    <select>
                        <option value="online">в сети</option>
                        <option value="offline">не в сети</option>
                        <option value="busy">не беспокоить</option>
                    </select>
                    
                </div>
                <button className="create-familytask">
                        Добавить члена семьи
                    </button>
            </div>
        </div>



        </>:


        <>
        <h1>Авторизуйтесь пожалуйста</h1>
        <a href="/">Login</a>
        </>
    );
}

export default Profilepage;