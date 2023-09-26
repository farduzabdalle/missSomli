import style from './Comptitor.module.scss';
import { MdOutlineHowToVote } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import { handleModal } from '../../features/modal/modalSlice';
import { setCurrentComptitor } from '../../features/Comptitor/ComptitorSlice';

const Comptitor = ({comptitor}) => {
 
  const Dispatch=useDispatch();
  const voteNow =()=>{
    Dispatch(setCurrentComptitor(comptitor));
  Dispatch(handleModal());
  }
  const backgroundStyle = {
		width: "100%",
		// height: "500px",
		background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${comptitor.Photo})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};
  return (
    <div className={style.Comptitor} style={backgroundStyle}>
      <div className={style.info}>
        <span className={style.name}>{comptitor.FirstName+ " "+ comptitor.MiddleName}</span>
        <span className={style.state}>{comptitor.RepresentingState}</span>
       
        <span className={style.vote_count}> Total Votes: {comptitor.NumberofVotes}</span>
      </div>
    <div className={style.vote} onClick={voteNow}>
   < MdOutlineHowToVote className={style.vote_icon} />
    </div>
    </div>
  )
}

export default Comptitor
