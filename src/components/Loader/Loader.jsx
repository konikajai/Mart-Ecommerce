import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Loader';

export function notify(){
    toast.success('Product is added to cart!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
}

function Loader() {
    return (
        <>
        <ToastContainer/>
        </>
    )
}

export default Loader;