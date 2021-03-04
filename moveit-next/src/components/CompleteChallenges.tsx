import { useContext } from 'react'
import styles from '../styles/components/CompleteChallenges.module.css'
import { ChallengesContext} from '../contexts/ChallengeContext'

export function CompleteChallenges() {
const {challengesCompleted} = useContext(ChallengesContext)
return(

<div className={styles.completeChallangesContainer}>

<span>Desafios Completos</span>
<span>{challengesCompleted}</span>
</div>


)


}