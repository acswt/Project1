
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>

    <header>
      <h1>Welcome to the Warehouse Manager</h1>
      </header>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div id="main-page-route-links">

        <a class="main-page-anchors" href="">Home</a>
        <a class="main-page-anchors" href="">Products</a>
        <a class="main-page-anchors" href="">Warehouses</a>
        <a class="main-page-anchors" href="">Inventory</a>

      </div>
    </>
  )
}

export default App
