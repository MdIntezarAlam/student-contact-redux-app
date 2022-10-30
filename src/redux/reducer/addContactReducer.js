// import { actionType } from "../constant/actionType"

const initialState = [
    {
        id: 1,
        name: "Bhai",
        email: "bhai@gmail.com",
        number: 1234567890,
    },
    {
        id: 2,
        name: "Shab",
        email: "shab@gmail.com",
        number: 2234567890,
    },
]

const addContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload]
            return state;
        //update the Contact
        case "UPDATE_CONTACT":
            const updatedState = state.map((contacts) => (
                contacts.id === action.payload.id ? action.payload : contacts
            ))
            state = updatedState
            return state

        //delete the Contact
        case "DELETE_CONTACT":
            //first of all filter the contact id
            const filterContact = state.filter((contacts) => (
                contacts.id !== action.payload && contacts
            ))
            state = filterContact;
            return state
        default:
            return state
    }
}
export default addContactReducer