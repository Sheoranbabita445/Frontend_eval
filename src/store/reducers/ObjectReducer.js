
const initialState = {
    objects: []
}

const ObjectReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'FETCH_OBJECTS':
    return {
        ...state,
        objects: [
            ...action.payload,
            ...state.objects.filter(
                obj => !action.payload.some(item => item.id === obj.id)
            )
        ]
    }

        case 'ADD_OBJECT':
            return {
                ...state,
                objects: [...state.objects, action.payload]
            }

        case 'DELETE_OBJECT':
            return {
                ...state,
                objects: state.objects.filter(
                    obj => obj.id !== action.payload
                )
            }

        default:
            return state
    }
}

export default ObjectReducer
