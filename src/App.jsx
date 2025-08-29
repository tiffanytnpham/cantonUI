import Header from "./components/Header"
import FilterBar from "./components/FilterBar"

import { useState } from "react"

export default function App() {

  const [filter, setFilter] = useState("all")
  function handleFilterChange(next){
    setFilter(next)
  }

  return (
    <>
      <Header />
      <FilterBar value={filter} onChange={handleFilterChange}/>
    </>
  )
}

