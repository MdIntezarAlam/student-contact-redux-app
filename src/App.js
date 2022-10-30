import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Appbar from './component/Appbar'
import Home from './component/Home'
import AddContact from './component/AddContact'
import EditContact from './component/EditContact'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
        <ToastContainer />
            <Appbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/add' element={<AddContact />} />
                    <Route path='/edit/:id' element={<EditContact />} />
                </Routes>
        </div>
    )
}

export default App