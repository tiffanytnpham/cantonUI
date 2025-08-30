import Header from "./components/Header"
import FilterBar from "./components/FilterBar"

import { useState, useEffect } from "react"

export default function App() {
  const [filter, setFilter] = useState("all") // State for filter value
  const [events, setEvents] = useState([])  // State for event (not used currently)
  
  // Handler for filter change
  function handleFilterChange(next){
    setFilter(next)
  }

  useEffect(() => {
    async function fetchActivities() {
      try {
        // Fetch activities from the API
        const response = await fetch("http://localhost:3000/activities", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({page_size: 10}), 
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json()
        setEvents(data.activities ?? []) // Update state with fetched data
      } catch (error) {
        console.error("Error fetching activities:", error)
      }
    }
    fetchActivities();
  }, []) // TODO: every 10 seconds

  return (
    <>
      <Header />
      <FilterBar value={filter} onChange={handleFilterChange}/>
      <p style={{ padding: "0 1rem" }}>Events loaded: {events.length}</p>
    </>
  )
}

