import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../styles/home.css'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'


export default function Home() {
  const contact = useSelector((state) => state.addContactReducer)



  const dispatch = useDispatch()
  //delete the contact

  const deleteContact = (id) => {
    console.log(dispatch({ type: "DELETE_CONTACT", payload: id }))
    toast.success("contact Deleted Successfuly! ")
  }


  // console.log(render)
  return (
    <div className='home'>
      <h1>Student Contact App</h1>
      <div className='box'>
        <Link to="/add">
          <button className='homebtn'>Add Contact</button>
        </Link>
      </div>
      <div className='AllTable'>
        <div className='table_box'>
          <div>SN</div>
          <div>Name</div>
          <div>Email</div>
          <div>Number</div>
          <div>Action</div>
        </div>
        {
          contact.map((item) => {
            const { id, name, email, number } = item
            return (
              <div className='table_box_2'>
                <div>{id}</div>
                <div>{name}</div>
                <div>{email}</div>
                <div>{number}</div>
                <div className='action_btn'>
                  <Link to={`/edit/${id}`}>
                    <button className='btn1'>Edit</button>
                  </Link>
                  <button type='button' className='btn2' onClick={() => deleteContact(item.id)}>Delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
