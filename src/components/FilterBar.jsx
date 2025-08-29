export default function FilterBar ({ onChange }) {
    return (
        <>
            <button onClick={() => { console.log("All clicked"); onChange("all"); }}>All</button>
            <button onClick={() => { console.log("Transactions clicked"); onChange("transactions"); }}>Transactions</button>
            <button onClick={() => { console.log("Automations clicked"); onChange("automations"); }}>Automations</button>
        </>
    )
}