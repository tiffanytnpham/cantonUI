import FilterBar from "./components/FilterBar"
import { useState } from "react"

export default function App() {

  const [filter, setFilter] = useState("all")
  function handleFilterChange(next){
    setFilter(next)
  }

  return (
    <>
      <h1>Hello World</h1>
      <FilterBar onChange={handleFilterChange}/>
    </>
  )
}

