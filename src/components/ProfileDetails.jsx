import { useState, useRef } from "react";
import Modal from "./Modal.jsx";

import Button from "./Button.jsx";


export default function ProfileDetails({ caption, info, buttonGeneralClassName }) {

    const showModal = useRef();
    function handleShowModal() {
        showModal.current.showModal();
    }


    return (
        <div>
            <Modal ref={showModal} />
            <div className="font-semibold">{caption}</div>
            <div className="flex justify-between items-center pl-4">
                <span>{info}</span>
                <button onClick={handleShowModal} id="button_general" className={`bg-[var(--white)] text-[var(--black-500)] px-4 py-2 rounded transition duration-300 ${buttonGeneralClassName}`}>
                    Change
                </button>
            </div>
        </div>
    )
}