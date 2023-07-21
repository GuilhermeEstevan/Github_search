import { ReactNode } from 'react'

interface IItemProps {
    icon: ReactNode
    label: string,
    value: number,
    color: string
}

const Item = ({ icon, label, value, color }: IItemProps) => {

    return (
        <article className='item'>
            <span className={color}>
                {icon}
            </span>
            <div>
                <h3>{value}</h3>
                <p>{label}</p>
            </div>
        </article>
    )
}
export default Item