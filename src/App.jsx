import { useState } from 'react'

function App() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear)

  const addYear = () => setYear((y) => y + 1)

  function removeYear() {
    setYear((y) => y - 1)
  }
  
  return (

    <>
      <div datatheme='dracula'></div>
      <h1 className="text-3xl font-bold text-center">
        Hello Tailwind!
      </h1>
      <div>
        <h1 className='text-2xl m-1'> this is daisy ui! current year: {year} AC. <br></br></h1>
      </div>
      <button className='text-2xl btn btn-secondary m-1' onClick={addYear}>
        add year! 
      </button>
      <button className='text-2xl btn btn-secondary m-1' onClick={removeYear}>
        remove year!
      </button>
    </>
  )
}

export default App
