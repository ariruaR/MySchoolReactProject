import './styles/Header.css';

function Header() {
    return (

        <header>
            <div className='header-div'>
                <h1 className='company-name'>My Project</h1>
                <button><a href="/">Home</a></button>
                <button><a href="/shop">Shop</a></button>
                <button><a href="/profile">Profile</a></button>
            </div>
        </header>

    );
}
export default Header;