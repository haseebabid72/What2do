import './App.css'
import Navbar from "./components/Navbar"
import TodoContainer from './components/TodoContainer'
function App() {
  
  return (
    <>
      <div id='switch_app_color' className="container mx-auto h-screen">
        <Navbar />
        <TodoContainer />
      </div>
    </>
  )
}

export default App
