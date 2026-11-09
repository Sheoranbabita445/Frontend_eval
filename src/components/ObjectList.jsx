
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { getObjects, deleteObject } from "../store/action/ObjectAction"

function ObjectList() {

    const list = useSelector(state => state.objects)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getObjects())
    }, [dispatch])

    const pageSize = 10
    const totalPages = Math.ceil(list.length / pageSize)

    const startIndex = (page - 1) * pageSize

    const currentList = list.slice(startIndex, startIndex + pageSize)

    const onDelete = (id) => {
        dispatch(deleteObject(id))
    }

    return (
        <div className="container mt-4">

            <button
                className="btn btn-secondary mb-3"
                onClick={() => navigate("/")}
            >
                Back
            </button>

            <h3>Object List</h3>

            <div className="row">

                {currentList.map((obj) => (

                    <div className="col-md-4 mb-3" key={obj.id}>

                        <div className="card h-100">

                            <div className="card-body">

                                <h5>{obj.name || "N/A"}</h5>

                                <p>Color: {obj.data?.Color ?? obj.data?.color ?? "N/A"}</p>

                                <p>Price: {obj.data?.Price ?? obj.data?.price ?? "N/A"}</p>

                                <p>CPU: {obj.data?.CPU ?? obj.data?.cpu ?? "N/A"}</p>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => onDelete(obj.id)}
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            <nav>
                <ul className="pagination justify-content-center">

                    <li className="page-item">
                        <button
                            className="page-link"
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                        >
                            Previous
                        </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (

                        <li className="page-item" key={p}>
                            <button
                                className={`page-link ${page === p ? "active" : ""}`}
                                onClick={() => setPage(p)}
                            >
                                {p}
                            </button>
                        </li>

                    ))}

                    <li className="page-item">
                        <button
                            className="page-link"
                            disabled={page === totalPages || totalPages === 0}
                            onClick={() => setPage(page + 1)}
                        >
                            Next
                        </button>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default ObjectList
