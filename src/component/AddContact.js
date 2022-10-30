import React, { useState } from 'react'
import '../styles/add.css'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contact = useSelector((state) => state.addContactReducer)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    // console.log(contact)

    const formSubmit = (e) => {
        e.preventDefault()

        //check name emai phone if there is alredy present in redux sore or not
        //if present return err  //if not present then push new
        const checkEmail = contact.find(contacts => contacts.email === email && email)
        const checkNumber = contact.find(contacts => contacts.number === parseInt(number))

        //validation
        if (!name || !email || !number) {
            return toast.warning("Please fill all the fields")
        }
        if (checkEmail) {
            return toast.error("This Email Already exists!")
        }
        if (checkNumber) {
            return toast.error("This Number Already exists!")
        }
        //now send the contact data to the store
        const data = {
            id: contact[contact.length - 1].id + 1,
            name,
            email,
            number
        }
        console.log("Data is", data)
        // dispatch(addContact(data))
        dispatch({ type: "ADD_CONTACT", payload: data })
        toast.success("Student Added successfully!")
        navigate("/")
    }

    return (
        <div className='.card_container'>
            <h1>Add Student Contact</h1>
            <form onSubmit={formSubmit}>
                <div className='card'>
                    <div className='input_1'>
                        <input className='inputs' placeholder='Enter Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='input_1'>
                        <input className='inputs' placeholder='Enter Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input_1'>
                        <input className='inputs' placeholder='Enter Phone Number' type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className='input_1'>
                        <button type="submit" className='addbtn'>Add Student</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddContact