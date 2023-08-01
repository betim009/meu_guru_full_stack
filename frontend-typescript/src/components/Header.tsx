import logo from '../assets/logo.svg'

function Header() {
    return (
        <header className="container-fluid d-flex justify-content-center align-items-center bg-light border-bottom border-3">
            <img src={logo} alt="logo.meuguru" />
        </header>
    )
}

export default Header;