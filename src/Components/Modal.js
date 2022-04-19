import React,{useState} from 'react'
import {motion} from 'framer-motion'
import Styles from './Modal.module.css'

const Modal = () => {

    const [isOpen, setIsOpen] = useState(false)


    const toggleHandler = () => {
        setIsOpen(!isOpen);
    }

    const modalVarient = {

        hidden:{
            y:"-100vh",
            opacity:0,
            scale:0
        },
        visible:{
            y:"0%",
            opacity:1,
            scale:1,
            transition:{
                type:"spring",
                duration:.5
            }
        }

    }

  return (
    <>
        <button className={Styles.Button}  onClick={toggleHandler}>Toggle Modal</button>


        <motion.div className={Styles.Modal} variants={modalVarient} animate={isOpen ? "visible" : ""} initial="hidden">
            <h1>Congratulation!</h1>
            <p>
                You just learnt animation of modal using React Framer Motion
            </p>

            <div className={Styles.buttonContainer}>
                <button className={Styles.Button} onClick={toggleHandler}>Great!</button>
                <button className={Styles.Button} onClick={toggleHandler}>Close</button>
            </div>
        </motion.div>
    </>
  )
}

export default Modal