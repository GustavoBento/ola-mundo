import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'


export default function MenuLink({texto, link}) {
    const localizacao = useLocation()
    return (
        <Link 
        className={`
            ${styles.link}
            ${localizacao.pathname === link ? styles.linkDestacado : ""}
        `} to={link}> {texto} </Link>
    )
}