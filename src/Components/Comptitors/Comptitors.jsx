import styles from './comptitors.module.scss' 
import comptitors from '../../assets/comptitors.json'
import Comptitor from '../Comptitor/Comptitor'
import { useSelector } from 'react-redux'

const Comptitors = () => {
  const {comptitors} =useSelector((store)=>store.comptitor)
  return (
    <div className={styles.comptitors_container}>
      <div className={styles.comptitors_header}>
        <span>MissSomalia</span>
        <p>this website built in react redux and sass</p>
      </div>

      <div className={styles.comptitors}>
     { comptitors.map((comptitor)=>(
       
        <Comptitor key={comptitor.Id} comptitor={comptitor}/>
      ))}
      </div>
    </div>
  )
}

export default Comptitors
