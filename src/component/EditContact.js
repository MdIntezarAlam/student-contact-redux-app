import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import '../styles/add.css'
import { toast } from 'react-toastify'


const EditCart = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const { id } = useParams()
    const contact = useSelector((state) => state.addContactReducer)
    const currentContact = contact.find((contacts) => contacts.id === parseInt(id));

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(contact)
   



    const formSubmit = (e) => {
        e.preventDefault()

        //check name emai phone if there is alredy present in redux sore or not
        //if present return err  //if not present then push new
        //if id same rahe tho edit karna hai else err
        const checkEmail = contact.find(contacts => contacts.id !== parseInt(id) && contacts.email === email && email)
        const checkNumber = contact.find(contacts => contacts.id !== parseInt(id) && contacts.number === parseInt(number))

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
            id: parseInt(id),
            name,
            email,
            number
        }
        // console.log("Data is", data)
        // dispatch(addContact(data))
        dispatch({ type: "UPDATE_CONTACT", payload: data })
        toast.success("Student Updated successfully!")
        navigate("/")
    }

    useEffect(() => {
        //if currentcontect is present then set name , email, number
        if (currentContact) {
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
    }, [currentContact])


    return (
        <div className='.card_container'>
            {currentContact ? (
                <>
                    <h1>Edit Student Contact {id}</h1>
                    <form onSubmit={formSubmit}>
                        <div className='card'>
                            <div className='input_1'>
                                <input
                                    className='inputs'
                                    placeholder='Enter Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className='input_1'>
                                <input
                                    className='inputs'
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='input_1'>
                                <input
                                    className='inputs'
                                    placeholder='Enter Phone Number'
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>
                            <div className=' btn_2 input_1'>
                                <button className='addbtn' type='submit'>Add Student</button>
                                <Link to="/">
                                    <button className='addbtn_2'>Cancel</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </>
            ) : (
                <p>User is Not Found With this id</p>
            )
            }


        </div >
    )
}

export default EditCart