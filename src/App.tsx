import { useEffect } from "react"


function App() {

  useEffect(() => {
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <>
    </>
  )
}

export default App
