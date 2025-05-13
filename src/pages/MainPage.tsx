import s from '../styles/pages/_Main.module.scss'
import Header from "../components/Header"
import { useState } from 'react'
import { categories } from '../utils/categories'
import group from '../assets/Group.png'
import SubHeading from '../components/SubHeading'
import Collection from '../components/Collection'

const MainPage = () => {
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState<string[]>([])

    const selectCategories = (district: string) => {
        if (selected.includes(district)) {
            setSelected(selected.filter((dis) => dis !== district))
        } else {
            setSelected([...selected, district])
        }
    }

    return (
        <div>
            <Header />

            <div className={s.search}>
                <div className={s.inputWrapper}>
                    <input type={'text'} placeholder={'Поиск'} className={s.input} value={search} onChange={(e) => setSearch(e.target.value)} />
                    <img src={group} className={s.icon} />
                </div>

                <div className={s.balance}>
                    <p>Ваш баланс <b>1.750 ₽</b></p>
                    <button>Пополнить</button>
                </div>
            </div>

            <div className={s.categories}>
                <SubHeading level={4}>Категории</SubHeading>
                {categories.map((district: string) =>
                    <p key={district} className={selected.includes(district) ? s.selected : ''} onClick={() => selectCategories(district)}>{district}</p>
                )}
            </div>

            <div className={s.fees}>
                <SubHeading level={4}>Интересное</SubHeading>
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

export default MainPage