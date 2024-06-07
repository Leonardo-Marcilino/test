import React, {Component} from "react"
import './EspecialistaLogado.css'
import './Coments.css'
import FaqEspecialista from'./FaqEspecialista'
import Banner from '../../Images/EspecialistasImg/BannerEspecialista.png'
import Seta from '../../Images/EspecialistasImg/Icon.png'
import Fundo from '../../Images/EspecialistasImg/Fundo.png'
import Lock from '../../Images/EspecialistasImg/Lock.png'
import Aproved from '../../Images/EspecialistasImg/Aproved.png'
import Relaxar from '../../Images/EspecialistasImg/relaxar.png'
import Visao from '../../Images/EspecialistasImg/visao.png'
import Note from '../../Images/EspecialistasImg/note.png'
import calendario from '../../Images/EspecialistasImg/calendario.png'
import check from '../../Images/EspecialistasImg/check.png'
import close from '../../Images/EspecialistasImg/close.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import Avaliacao from '../../Images/EspecialistasImg/star.png'


export default class Especialistas extends Component{
    state = {
        Depoimentos:[
            {
                Review: '"A plataforma é bastante intuitiva, o que facilita tanto para mim quanto para os pacientes marcarem e participarem das sessões online de forma tranquila e sem complicações."',
                Autor: 'Dafny Cristina Psicóloga'
            },
            {
                Review: '"Os recursos disponíveis são realmente úteis. eles enriquecem a experiência terapêutica, permitindo uma colaboração mais eficaz e uma melhor compreensão das necessidades dos pacientes"',
                Autor: 'Dafny Cristina Psicóloga'
            },
            {
                Review: '"A capacidade de personalizar minha experiência na plataforma é um grande diferencial. Tenho a liberdade de moldar a plataforma de acordo com minhas necessidades específicas e estilo de trabalho."',
                Autor: 'Dafny Cristina Psicóloga'
            },
            {
                Review: '"A plataforma é bastante intuitiva, o que facilita tanto para mim quanto para os pacientes marcarem e participarem das sessões online de forma tranquila e sem complicações."',
                Autor: 'Dafny Cristina Psicóloga'
            },
            {
                Review: '"Os recursos disponíveis são realmente úteis. eles enriquecem a experiência terapêutica, permitindo uma colaboração mais eficaz e uma melhor compreensão das necessidades dos pacientes"',
                Autor: 'Dafny Cristina Psicóloga'
            },
            {
                Review: '"A capacidade de personalizar minha experiência na plataforma é um grande diferencial. Tenho a liberdade de moldar a plataforma de acordo com minhas necessidades específicas e estilo de trabalho."',
                Autor: 'Dafny Cristina Psicóloga'
            }
        ]
    }

  render(){
    return(
      <>
      <section className="PageEspecialistas">
        <div className="CabecalhoEspecialista">
            <div className="CabecalhoTextos">
                    <h1>Seu <span>consultório online, inovando e otimizando</span> a vida do especialista </h1>
                    <p>O seu ambiente de trabalho completo em apenas um lugar, investimos no futuro e bem estar do profissional.</p>               
                <div className="BtnCabecalho">
                  {/* <p>Tudo isso, <span>SEM TAXA DE MENSALIDADE</span></p> */}
                  <button>Faça parte do nosso time <img src={Seta} alt="seta" /></button> 
                </div>
            </div>
            <div className="CabecalhoBanner">
                <img src={Banner}/>
            </div>
        </div>
        <div className="Artigos">
            <div className="Textos4">
                <h2>Bem estar da sua carreira</h2>
                <p>Através desses pilares, você terá a melhor experiência na Intermentes aonde o seu sucesso é a nossa feliciade.</p>
            </div>
            <div className="Pesquisas">
                <div className="CardArtigo">
                    <img src={Note} alt="" />
                    <h4>Gestão inteligente</h4>
                    <p>Faça a gestão de seu perfil e de sua agenda de maneira rápida e fácil.</p>
                </div>
                <div className="CardArtigo">
                    <img src={Visao} alt="" />
                    <h4>Visibilidade crescente</h4>
                    <p>Tenha sua carreira em constante crescimento e conquiste novos clientes.</p>
                </div>
                <div className="CardArtigo">
                    <img src={Relaxar} alt="" />
                    <h4>Seu Desenvolvimento</h4>
                    <p>Aprimore-se com uma plataforma moderna e intuitiva</p>
                </div>
            </div>
        </div>
        <div className="Box">
                <div className="Subtexto">
                    <h2>E quem já trabalha conosco?</h2>
                    <p>Confira os feedback dos nossos especialistas sobre a plataforma da <span>Intermentes</span></p>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}>
                        {this.state.Depoimentos.map((item) => (
                        <SwiperSlide> 
                            <div className="Depoimentos">
                                <div className="Comentario">
                                   <p>{item.Review}</p>  
                                </div>
                                <div className="Autores">
                                    <img src={Avaliacao} alt="" />
                                    <p>{item.Autor}</p>
                                </div> 
                            </div>
                            
                        </SwiperSlide>          
                        ))}
                    </Swiper>
                    <div className="Btn2">
                    <h3>Faça parte da <span>Intermente</span></h3>
                    <button>Cadastre-se</button>
                </div>
        </div>
        <div className="Calendario">
            <div>
                <img src={calendario} alt="" />
            </div>
            <div className="Texto5">
                <h2>Confira sua <span>agenda agora, organize suas sessões</span> de uma maneira muito mais pratica</h2>
                <button>Acssse seu perfil <img src={Seta} alt="" /></button>
            </div>
        </div>
        <div className="Vantagens">
            <div className="Textos2">
                            <h2>Faça parte da <span>Intermentes</span><br/> e não saia perdendo</h2>
                            <p>Impulsionando a otimização e visibilidade do seu trabalho em apenas um lugar.</p>
                            <FaqEspecialista/>
                        </div>
                        <div className="Cards">
                            <div className="Card1">
                                <img src={Lock} alt="" />   
                                <p>Dados<br/><span>Criptografados</span></p>
                             </div>
                            <div className="Card2">
                            <img src={Aproved} alt="" />
                            <p>Conformidade<br/><span>LGPD</span></p>
                            </div>
                            <div className="Banner2">
                            <img src={Fundo} alt="" />
                            </div>
                            </div>
        </div>
        <div className="Planos">
            <div className="Texto6">
                <h2>Conheça nossas planos</h2>
                <p>Transforme o local de trabalho com terapia sob medida. Saúde mental é o alicerce para inovação e sucesso!</p>
            </div>
            <div className="Cards3">
                <div className="Card4">
                <h3>Plano Raiz</h3>
                    <h4>R$ 249,99<span>/por mês</span></h4>
                    <p> Forneça seus serviços na plataforma sem custo de hospedagem</p>
                    <ul>
                        <li><img src={check}/>at tellus at urna condimentum</li>
                        <li><img src={check}/>at tellus at urna condimentum</li>
                        <li><img src={close}/>at tellus at urna condimentum</li>
                        <li><img src={close}/>at tellus at urna condimentum</li>
                    </ul>
                </div>
                <div className="Card4">
                    <h3>Plano Crescimento</h3>
                    <h4>R$ 734,97<span>/por 3 meses</span></h4>
                    <p>Up na carreira prioridades na busca</p>
                    <ul>
                        <li><img src={check}/>at tellus at urna condimentum</li>
                        <li><img src={check}/>at tellus at urna condimentum</li>
                        <li><img src={close}/>at tellus at urna condimentum</li>
                        <li><img src={close}/>at tellus at urna condimentum</li>
                    </ul>
                </div>
                <div className="Card4">
                <h3>Plano Florescer</h3>
                    <h4>R$1,424,94<span>/por 6 meses</span></h4>
                    <p>Profissão nas alturas, time de marketing para você</p>
                    <ul>
                        <li><img src={check}/>at tellus at urna condimentum</li>
                        <li><img src={check}/>at tellus at urna condimentum</li>
                        <li><img src={close}/>at tellus at urna condimentum</li>
                        <li><img src={close}/>at tellus at urna condimentum</li>
                    </ul>
                </div>
            </div>

        </div>

      </section>
      </>
    )
  }
}