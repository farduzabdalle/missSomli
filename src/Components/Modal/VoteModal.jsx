import Modal from 'react-modal';
import { useState } from 'react';
import style from './VoteModal.module.scss'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import { handleModal } from '../../features/modal/modalSlice';
import { decreasevote, increasevote, resetState,addVoteToComptitor } from '../../features/Comptitor/ComptitorSlice';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');
const VoteModal = () => {
  const Dispatch=useDispatch();

      let subtitle;
    const [modalIsOpen, setIsOpen] =useState(false);
    const {isOpen}=useSelector((store)=>store.modal);
    const {currentComptitor,voteCount}=useSelector((store)=>store.comptitor);
     console.log(currentComptitor);
     if(!currentComptitor) return ;


     const handleSubmit = (event) => {
      event.preventDefault();
      if (voteCount === 0) return alert("Please vote at least 1 vote");
      Dispatch(addVoteToComptitor(currentComptitor.Id));
      Dispatch(resetState());
      closeModal();
    };
  //  console.log(modalstate);
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      Dispatch(handleModal());
    }
    const backgroundStyle = {
      width: "100%",
      height: "300px",
      background: `linear-gradient(0deg,#29ae65b2,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url('${currentComptitor.Photo}')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderBottomRightRadius: "10px",
    };
  return (
    <>
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className={style.modal}
        overlayClassName={style.overlay}
       >
        <div className={style.modal_container}>
          <div className={style.comptitor_info}>
            {/* photo */}
            <div style={backgroundStyle}></div>
            <div className={style.bio}>
              <div className={style.divider}>
                <label>Name</label>
                <span>{currentComptitor.FirstName + " "+ currentComptitor.LastName}</span>
              </div>
              <div className={style.divider}>
                <label>State</label>
                <span>{currentComptitor.RepresentingState}</span>
              </div>
              <div className={style.divider}>
                <label>Backround</label>
                <span>{currentComptitor.PersonalBackground}</span>
              </div>
              <div className={style.divider}>
                <label>Employmentor School</label>
                <span>{currentComptitor.EmploymentorSchool}</span>
              </div>
            </div>
          </div>
          <div className={style.vote_container}>
            <div className={style.vote_count}>
              <span>Purchase Votes</span>
              <div className={style.vote_controls}>
                <button  onClick={()=>Dispatch(decreasevote())}>
                  <AiOutlineMinus className={style.icon} />
                </button>

                <span>{voteCount}</span>
                <button onClick={()=>Dispatch(increasevote())}>
                  <AiOutlinePlus className={style.icon} />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
          <span>pay with Evc,zaad,Sahal</span>
          <input type='number' placeholder='2526' className={style.form_control}/>
          <button type="submit">Vote Now</button>
         </form>
          </div>
        </div>
      </Modal>
    </div>
  </>
  )
}

export default VoteModal
