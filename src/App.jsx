import './App.css'
import Navbar from "./components/Navbar"
import TodoContainer from './components/TodoContainer'
function App() {
  
  return (
    <>
      <div id='switch_app_color' className="container mx-auto h-screen">
        <Navbar />
        <div className="flex content-center p-10">
        <TodoContainer />
        </div>
      </div>
    </>
  )
}

export default App
