import logo from "../assets/5north.svg";

export default function Header () {
    return (
        <header className="header">
            <img src={logo} alt="5North Logo" />
            <h1>Transactions</h1> 
        </header>

    )

}