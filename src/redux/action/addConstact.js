import { actionType } from "../constant/actionType"

export const addContact = (contact) => {
    return {
        type: actionType.ADD_CONSTACT,
        payload: contact,
    }
}