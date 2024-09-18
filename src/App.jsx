import Content from "./components/Content"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import SocialIcons from "./components/SocialIcons"

function App() {
  return(
    <div className="app">
      <aside className="aside">
        <Sidebar/>
        <SocialIcons/>
      </aside>

      <main className="main">
        <Header/>
        <Content/>
      </main>
    </div>
  )
}

export default App
