import { useState } from 'react';
import profile from '../assets/img/profile.jpg';
import ProfileDetails from './ProfileDetails.jsx';
import Modal from './Modal.jsx';

export default function Profile() {

    const [modalData, setModalData] = useState({ open: false, caption: '', info: '' });

    function handleOpenModal(caption, info) {
        setModalData({ open: true, caption, info });
    }

    function handleCloseModal() {

        setModalData(prevModalData => ({ ...prevModalData, open: false }));
    }

    const d = new Date();
    let year = d.getFullYear();

    return (
        <>
            <Modal isOpen={modalData.open} onClose={handleCloseModal} caption={modalData.caption} info={modalData.info} />
            <div className="flex justify-center items-center min-h-screen mt-8">
                <div className="flex flex-col justify-start w-1/3 min-w-[339px] min-h-[100px] bg-[var(--white-600)] text-[var(--black)] border-1 border-solid rounded-t-full border-[var(--orange-web)] space-y-8 p-8">
                    <div className="flex flex-col justify-center items-center">
                        <img src={profile} alt="user image" className="w-40 h-40 border-1 border-solid border-[var(--orange-web)] rounded-full" />
                        {/* <Button buttonGeneralClassName="mt-4" /> */}
                    </div>
                    <div className="mt-8">
                        <ProfileDetails caption={"Username"} info={"Lola"} onChangeClick={handleOpenModal} />
                        <ProfileDetails caption={"Password"} info={"LolaIsCool!123"} onChangeClick={handleOpenModal} />
                        <ProfileDetails caption={"Email"} info={"lola@gmail.com"} onChangeClick={handleOpenModal} />
                        <ProfileDetails caption={"Your subscription"} info={"Standard"} onChangeClick={handleOpenModal} />
                        <ProfileDetails caption={"Next payment"} info={`31.12.${year}`} onChangeClick={handleOpenModal} />
                        <ProfileDetails caption={"Payment method"} info={"**** **** **** 1234"} onChangeClick={handleOpenModal} />
                    </div>
                </div>
            </div>
        </>
    )
}