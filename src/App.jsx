import {useState} from "react"
import Content from "./components/Content"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import SocialIcons from "./components/SocialIcons"
import {MainContext} from "./contexts/use-main-context"

function App() {
  const [selectedBrands, setSelectedBrands] = useState([]);

  console.log(selectedBrands)

  const data = {
    selectedBrands,
    setSelectedBrands,
  }

  return(
    <MainContext.Provider value={data}>
      <div className="app">
        <aside className="aside">
          <Sidebar/>
          {/* <SocialIcons/> */}
        </aside>

        <main className="main">
          <Header/>
          <Content/>
        </main>
      </div>
    </MainContext.Provider>
  )
}

export default App
