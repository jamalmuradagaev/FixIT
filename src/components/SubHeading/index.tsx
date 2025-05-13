import s from './SubHeading.module.scss'

type subHeading = {
    level: number,
    children: string
}

const SubHeading = ({ level, children }: subHeading) => {
    if (level == 4) {
        return <h4 className={s.sub4}>{children}</h4>
    }
}

export default SubHeading