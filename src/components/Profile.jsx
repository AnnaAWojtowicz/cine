import { useState } from 'react';
import profile from '../assets/img/profile.jpg';
import ProfileDetails from './ProfileDetails.jsx';
import Modal from './Modal.jsx';

export default function Profile() {

    let d = new Date();
    let year = d.getFullYear();

    const [profileData, setProfileData] = useState({
        Username: "Lola",
        Password: "LolaIsCool!123",
        Email: "lola@gmail.com",
        "Your subscription": "Standard",
        "Next payment": `31.12.${new Date().getFullYear()}`,
        "Payment method": "**** **** **** 1234"
    });


    const [modalData, setModalData] = useState({ open: false, caption: '', info: '' });


    function handleOpenModal(caption, info) {
        setModalData({ open: true, caption, info });
    }

    function handleCloseModal() {
        setModalData(prevModalData => ({ ...prevModalData, open: false }));
    }

    function confirmChangeProfileData(newInfoValue) {
        setProfileData(prevProfileData => ({
            ...prevProfileData,
            [modalData.caption]: newInfoValue
        }));
        handleCloseModal();
    }




    return (
        <>
            <Modal isOpen={modalData.open} onClose={handleCloseModal} caption={modalData.caption} info={modalData.info} onConfirm={confirmChangeProfileData} />
            <div className="flex justify-center items-center min-h-screen mt-8">
                <div className="flex flex-col justify-start w-1/3 min-w-[339px] min-h-[100px] bg-[var(--white-600)] text-[var(--black)] border-1 border-solid rounded-t-full border-[var(--orange-web)] space-y-8 p-8">
                    <div className="flex flex-col justify-center items-center">
                        <img src={profile} alt="user image" className="w-40 h-40 border-1 border-solid border-[var(--orange-web)] rounded-full" />
                        {/* <Button buttonGeneralClassName="mt-4" /> */}
                    </div>
                    <div className="mt-8">
                        <ProfileDetails caption={"Username"} info={profileData.Username} onChangeClick={handleOpenModal} />
                        <ProfileDetails caption={"Password"} info={profileData.Password} onChangeClick={handleOpenModal} />
                        <ProfileDetails caption={"Email"} info={profileData.Email} onChangeClick={handleOpenModal} />
                        <ProfileDetails caption={"Your subscription"} info={profileData["Your subscription"]} onChangeClick={handleOpenModal} />
                        <ProfileDetails caption={"Next payment"} info={profileData["Next payment"]} onChangeClick={handleOpenModal} />
                        <ProfileDetails caption={"Payment method"} info={profileData["Payment method"]} onChangeClick={handleOpenModal} />
                    </div>
                </div>
            </div>
        </>
    )
}