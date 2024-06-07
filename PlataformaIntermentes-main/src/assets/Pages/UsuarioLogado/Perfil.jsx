import style from './Perfil.module.css';
import PainelUser from './PainelUser';
import { Outlet } from "react-router-dom"

export default function Perfil() {
    return (
        <div className={style.container}>
            <PainelUser />
            <Outlet />
        </div>
    )
}