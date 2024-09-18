import Content from "./components/Content"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import SocialIcons from "./components/SocialIcons"

function App() {
  return(
    <div className="app">
      <aside>
        <Sidebar/>
        <SocialIcons/>
      </aside>

      <main>
        <Header/>
        <Content/>
      </main>
    </div>
  )
}

export default App
