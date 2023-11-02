"use client"
import {BiMessageDots} from 'react-icons/bi'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Quote = () => {
    const [open, setOpen] = useState(false);

    const form = useRef();
    const [isLoading, setIsLoading] = useState(false); 
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        setIsLoading(true);
    
        emailjs
          .sendForm('service_rhzxxbp', 'template_9qiapiw', 
            form.current, 'YjJg5Ix6s0Rk5Gwc5')
          .then(
            (result) => {
              toast.success('Your message was conveyed perfectly');
              e.target.reset();
            },
            (error) => {
              console.log(error)
              toast.error(error.message);
            }
          )
          .finally(() => {
            setIsLoading(false);
            onCloseModal() 
          });
      };

    return (
        <div className="">
        <button className="fixed bottom-7 right-6 bg-blue-700 p-2 md:p-2.5 rounded-full"  onClick={onOpenModal}>
        <BiMessageDots size={40} color="white"/>
        </button>
        <Modal open={open} onClose={onCloseModal} classNames={{modal: 'w-[90%]  md:[70%] lg:w-[40%]'}}>
         <h1 className="text-slate-700 text-xl font-bold">Dhehwa graphics</h1>
       
       <div>
        <h1 className="text-center my-4  tex-lg">Hi! Let us know how we can help and we’ll respond shortly.  </h1>

      <form  className="w-full my-4" ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <input
            required
            type="text"
            name="user_name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Name"
          />
        </div>

        <div className="mb-4">
          <input
            required
            type="email"
            name="user_email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Email"
          />
        </div>

        <div className="mb-6">
          <textarea
            required
            name="message"
            className="w-full p-2 border border-gray-300 rounded h-32 focus:outline-none focus:border-blue-500"
            placeholder="Message"
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="mr-2 animate-pulse">Loading...</div>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            </div>
          ) : (
            'Submit'
          )}
        </button>
      </form>
       </div>
        
      </Modal>
      <ToastContainer/>
        </div>
    )
} 

export default Quote