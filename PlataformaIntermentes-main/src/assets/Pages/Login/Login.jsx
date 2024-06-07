import React, { useEffect, useRef } from "react";
import style from "./Login.module.css"; // Certifique-se de ter o arquivo CSS importado
import ImgLogin from '../../Images/LoginImg/ImgLogin.png'
import ImgCadastro from '../../Images/LoginImg/ImgCadastro.png'
import { Link } from 'react-router-dom';

export default function Login() {
    const containerRef = useRef(null);

    useEffect(() => {
        const sign_in_btn = document.getElementById("sign-in-btn");
        const sign_up_btn = document.getElementById("sign-up-btn");

        const container = containerRef.current;

        sign_up_btn.addEventListener("click", () => {
            container.classList.add(style["sign-up-mode"]);
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove(style["sign-up-mode"]);
        });
    }, []);

    return (
        <div className={style.container} ref={containerRef}>
            <div className={style["forms-container"]}>
                <div className={style["signin-signup"]}>
                    <form action="#" className={style["sign-in-form"]}>
                        <h2 className={style.title}>Intermentes</h2>
                        <div className={style.containerCheckbox}>
                            <h2>Qual o cliente você é?</h2>
                            <div className={style.checkboxUser}>
                                <label htmlFor="campo-radio1">Paciente</label>
                                <input type="radio" value="0" name="campo-radio" id="campo-radio1" />

                                <label htmlFor="campo-radio2">Psicólogo</label>
                                <input type="radio" value="0" name="campo-radio" id="campo-radio2" />
                            </div>
                        </div>
                        <div className={style.containerRedes}>
                            <p className={style["social-text"]}>Entre com:</p>
                            <div className={style["social-media"]}>
                                <a href="#" className={style["social-icon"]}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className={style["social-icon"]}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className={style["social-icon"]}>
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className={style["social-icon"]}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                        <p className={style.entreComForms}>Entre com:</p>
                        <div className={style["input-field"]}>
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className={style["input-field"]}>
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <Link to={'/HomeUsuario'}>
                            <input type="submit" value="Login" className={`${style.btn} ${style.solid}`} />
                        </Link>
                    </form>
                    <form action="#" className={style["sign-up-form"]}>
                        <h2 className={style.title}>Cadastre-se</h2>
                        <div className={style.checkboxUser}>
                            <label htmlFor="campo-radio3">Paciente</label>
                            <input type="radio" value="0" name="campo-radio" id="campo-radio3" />

                            <label htmlFor="campo-radio4">Psicólogo</label>
                            <input type="radio" value="0" name="campo-radio" id="campo-radio4" />
                        </div>
                        <div className={style["input-field"]}>
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Digite seu nome" />
                        </div>
                        <div className={style["input-field"]}>
                            <i className="fas fa-envelope"></i>
                            <input type="number" placeholder="CPF" />
                        </div>
                        <div className={style["input-field"]}>
                            <i className="fas fa-envelope"></i>
                            <input type="number" placeholder="CRP" />
                        </div>
                        <div className={style["input-field"]}>
                            <i className="fas fa-envelope"></i>
                            <input type="number" placeholder="(__) ___-___" />
                        </div>
                        <div className={style["input-field"]}>
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className={style["box-input-senha"]}>
                            <div className={style["input-field"]}>
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Senha" />
                            </div>
                            <div className={style["input-field"]}>
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Confirme a senha" />
                            </div>
                        </div>
                        <input type="submit" className={style.btn} value="Cadastrar-se" />
                    </form>
                </div>
            </div>

            <div className={style["panels-container"]}>
                <div className={`${style.panel} ${style["left-panel"]}`}>
                    <div className={style.content}>
                        <h3>É novo aqui ?</h3>
                        <p>
                            Está esperando o que para se inscrever e impulsionar seus cuidados mentais  com a InterMentes :D
                        </p>
                        <button className={`${style.btn} ${style.transparent}`} id="sign-up-btn">
                            Cadastre-se
                        </button>
                    </div>
                    <div className={style["left-image"]}>
                        <img src={ImgLogin} className={style.image} alt="" />
                    </div>
                </div>
                <div className={`${style.panel} ${style["right-panel"]}`}>
                    <div className={style.content}>
                        <h3>Você já é um de nós?</h3>
                        <p>
                            Estavamos com saudade de você, clique no botão abaixo e volte a cuidar da sua saúde com a InterMentes :D
                        </p>

                        <button className={`${style.btn} ${style.transparent}`} id="sign-in-btn">
                            Entrar
                        </button>
                    </div>
                    <div className={style["right-image"]}>
                        <img src={ImgCadastro} className={style["image-cadastro"]} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
