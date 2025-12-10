import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCServerLog from './Class Components/CCServerLog'

function App() {
  //show = המשתנה שהוא state
  //setShow = פונקציה שמשנה את הערך של המשתנה
  //useState(true) = הערך ההתחלתי של המשתנה show זה true
  const [show, setShow] = useState(true);

  //במידה ואני לוחצת על הכפתור הפונקציה הזו מופעלת ומשנה את המשתנה
  //! = מבצע את ההיפוך של הערך הבוליאני. במידה והוא true יהפוך ל-false ולהפך
  const BtnShow = () => {
    setShow(!show)
  }

  
  return (
    <>
      <button onClick={BtnShow}>{show ? "Hide components" : "Show components"}</button>
      {show && <CCServerLog/>}
    </>
  )
}

export default App
