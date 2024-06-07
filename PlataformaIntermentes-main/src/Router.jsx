import { Routes, Route } from 'react-router-dom'
import Beneficiario from './assets/Pages/Beneficiario/Beneficiario'
import PsicologiaGratuita from './assets/Pages/PsicologiaGratuita/PsicologiaGratuita'
import Login from './assets/Pages/Login/Login'
import Especialista from './assets/Pages/Especialista/Especialista'

import Perfil from './assets/Pages/UsuarioLogado/Perfil'
import PainelControle from './assets/Componentes/OpçõesPerfil/PainelControle'

export default function MainRoutes(){
    return(
        <Routes>
            <Route path='/Especialista' element={<Especialista/>}></Route>
            <Route path='/Beneficiario' element={<Beneficiario />}></Route>
            <Route path='/PsicologiaGratuita' element={<PsicologiaGratuita />}></Route>
            <Route path='/Login' element={<Login />}></Route>

            {/* Roda dentro do perfil do usuário */}

            <Route path='/Perfil' element={<Perfil />}>
                <Route path='/Perfil/PainelDeControle' element={<PainelControle />}></Route>
            </Route>
            

        </Routes>
    )

}