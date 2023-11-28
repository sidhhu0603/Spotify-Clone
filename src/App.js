import Sidebar from "./components/Sidebar"
import Bottombar from "./components/Bottombar"
import SongState from "./components/context/SongState"

export default function App() {
  return (
   <>
  <SongState>
   <div className="flex h-[calc(100vh-theme(space.24))]">
   <Sidebar/>
   </div>
   <Bottombar/>
   </SongState>
   </>
  )
}