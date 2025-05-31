import s from './Collection.module.scss'
import img from '../../assets/Mask group.png'
import SubHeading from '../SubHeading'
import { useNavigate } from 'react-router'

const Collection = () => {
    const navigate = useNavigate();

    return (
        <div className={s.collection} onClick={() => navigate('/collection')}>
            <div className={s.image}>
                <img src={img} alt="" />
            </div>

            <div className={s.info}>
                <div>
                    <SubHeading level={4}>Ремонт детской площадки</SubHeading>
                    <p>4.563 ₽ собрали | 2 дня назад</p>
                </div>

                <div className={s.readness}>
                    44%
                </div>
            </div>
        </div>
    )
}

export default Collection