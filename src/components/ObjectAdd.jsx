import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { addObject } from "../store/action/ObjectAction"

function ObjectAdd() {

    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const [price, setPrice] = useState("")
    const [cpu, setCpu] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const add = async (e) => {
        e.preventDefault()

        const obj = {
            name: name,
            data: {
                Color: color,
                Price: price === "" ? null : Number(price),
                CPU: cpu
            }
        }

        await dispatch(addObject(obj))

        navigate("/object-list")
    }

    return (
        <div className="container mt-4">

            <button
                className="btn btn-secondary mb-3"
                onClick={() => navigate("/")}
            >
                Back
            </button>

            <div className="card p-4">

                <h3>Add Object</h3>

                <form onSubmit={(e) => add(e)}>

                    <div className="mb-3">
                        <label>Object Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Color</label>
                        <input
                            type="text"
                            className="form-control"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Price</label>
                        <input
                            type="number"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label>CPU</label>
                        <input
                            type="text"
                            className="form-control"
                            value={cpu}
                            onChange={(e) => setCpu(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-success">
                        Add Object
                    </button>

                </form>

            </div>

        </div>
    )
}

export default ObjectAdd
