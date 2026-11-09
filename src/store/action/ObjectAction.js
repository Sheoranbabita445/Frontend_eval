import axios from "axios"
const API_URL = "https://api.restful-api.dev/objects"

export const getObjects = () => async (dispatch) => {
    const response = await axios.get(API_URL)

    dispatch({
        type: 'FETCH_OBJECTS',
        payload: response.data
    })
}

export const addObject = (obj) => async (dispatch) => {
    const response = await axios.post(API_URL, obj)

    dispatch({
        type: 'ADD_OBJECT',
        payload: response.data
    })
}

export const deleteObject = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_URL}/${id}`)

        dispatch({
            type: 'DELETE_OBJECT',
            payload: id
        })
    }
    catch (error) {
        alert("This object cannot be deleted")
    }
}