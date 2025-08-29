import "./FilterBar.css";

export default function FilterBar ({ value, onChange }) {
    return (
        <nav className="filter-bar">
            <h1>Filter By:</h1>
            <button 
                className={value === "all" ? "active" : ""} 
                onClick={() => { 
                    console.log("All clicked"); 
                    onChange("all"); 
                    }}
                >
                    All
                </button>
            <button 
                className={value === "transactions" ? "active" : ""} 
                onClick={() => { 
                    console.log("Transactions clicked"); 
                    onChange("transactions"); 
                    }}
                >
                    Transactions
                </button>
            <button 
                className={value === "automations" ? "active" : ""} 
                onClick={() => { 
                    console.log("Automations clicked"); 
                    onChange("automations"); 
                    }}
                >
                    Automations
                </button>
        </nav>
    )
}