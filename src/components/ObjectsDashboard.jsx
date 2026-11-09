import { useNavigate } from "react-router"

function ObjectsDashboard() {

    const navigate = useNavigate()

    return (
        <div className="container mt-5 text-center">

            <h2>Objects Dashboard</h2>

            <button
                className="btn btn-primary m-3"
                onClick={() => navigate("/object-list")}
            >
                Object List
            </button>

            <button
                className="btn btn-success m-3"
                onClick={() => navigate("/object-add")}
            >
                Object Add
            </button>

        </div>
    )
}

export default ObjectsDashboard
