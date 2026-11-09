import { Route, Routes } from "react-router"
import ObjectsDashboard from "./components/ObjectsDashboard"
import ObjectList from "./components/ObjectList"
import ObjectAdd from "./components/ObjectAdd"

function App() {
    return (
        <Routes>
            <Route path="/" element={<ObjectsDashboard />} />
            <Route path="/object-list" element={<ObjectList />} />
            <Route path="/object-add" element={<ObjectAdd />} />
        </Routes>
    )
}

export default App
