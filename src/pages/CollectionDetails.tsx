import s from '../styles/pages/_CollectionDetails.module.scss'
import Header from "../components/Header"
import SubHeading from '../components/SubHeading'
import img from '../assets/Mask group.png'
import userImg from '../assets/user.png'
import check from '../assets/Group8630.png'
import Button from '../components/Button'
import Collection from '../components/Collection'

const CollectionDetails = () => {
    return (
        <div>
            <Header />

            <div className={s.collection}>
                <div className={s.progress}>
                    <img src={img} alt="" />
                    <div className={s.creator}>
                        <img src={userImg} alt="" className={s.userImg} />
                        <p>Индира Магомедова</p>
                        <img src={check} alt="" className={s.check} />
                    </div>
                    <div className={s.goal}>
                        <p>Цель <b>4.563 ₽</b>/ 15.000 ₽ </p>
                        <progress className={s.progressBar} value={4563/15000}></progress>
                    </div>
                    <Button type='button' style={{margin: '20px 0'}}>Пожертвовать сейчас</Button>
                </div>
                <div className={s.description}>
                    <h1>Ремонт детской площадки</h1>
                    <SubHeading level={4}>Махачкала</SubHeading>
                    <p>
                        Дорогие жители! Приглашаем вас принять участие в сборе средств на ремонти обновление нашей детской площадки!
                        <br />
                        <br /> Площадка — это место, где дети могут весело проводить время. Однако время не щадит,и некоторые элементы требуют ремонта. Мы хотим сделать площадку безопасной и привлекательной для всех наших малышей. Ваши пожертвования помогут:
                        <br /> - Заменить старое оборудование
                        <br /> - Обновить покрытие
                        <br /> - Установить новые игровые элементы
                        <br /> - Обеспечить безопасность детей
                        <br />
                        <br />Спасибо за вашу поддержку!
                    </p>
                </div>
            </div>

            <div className={s.similar}>
                <SubHeading level={4}>Похожее</SubHeading>

                <div className={s.collections}>
                    <Collection />
                    <Collection />
                    <Collection />
                    <Collection />
                </div>
            </div>
        </div>
    )
}

export default CollectionDetails