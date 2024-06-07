import style from './Painel.module.css';
import IconPessoa from '../../Images/UserPage/IconPessoa.png';

const abrirModalSenha = () => {
    // Função para abrir o modal de alteração de senha
    console.log("Abrir modal de senha");
};

export default function PainelControle() {
    return (
        <section className={style.formsDataUser}>
            <h2 className={style.titleDados}>
                <img src={IconPessoa} alt="Icone de uma pessoa" /> <span>Dados da conta</span>
            </h2>
            <form action='' className={style.dataUser}>
                <div className={style.inputDateUser}>
                    <label htmlFor="name">Nome completo</label>
                    <input type="text" id={style.name} />
                </div>
                <div className={style.inputDateUser}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id={style.email} />
                </div>
                <div className={style.inputDateUser}>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" id={style.telefone} />
                </div>
                <div className={style.inputDateUser}>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id={style.cpf} />
                </div>
                <div className={style.inputDateUser}>
                    <label htmlFor="dataDeNascimento">Data de nascimento</label>
                    <input type="text" id={style.dataDeNascimento} />
                </div>
                <div className={style.inputDateUser}>
                    <label htmlFor="contatoEmergencia">Contato de emergência</label>
                    <input type="text" id={style.contatoEmergencia} />
                </div>
                <div className={style.boxPasswordAndSave}>
                    <div>
                        <p>Senha</p>
                        <p className={style.password}>***********</p>
                    </div>
                    <button
                        className={style.alterarSenhaButton}
                        onClick={abrirModalSenha}
                        type="button"
                    >
                        Alterar senha
                    </button>
                </div>
            </form>
            <div class="container-data-banker">
                <h2>
                    Dados bancários</h2>
                <div class="banker-box">
                    <div class="box-card-data">
                        <div class="description-card-data">
                            <p>Diogo Santana</p>
                            <p>•••• •••• •••• 9990</p>
                        </div>
                        <div class="description-card-data">
                            <span class="icon-card">M</span>
                            <p>Excluir</p>
                        </div>
                    </div>
                    <div class="box-card-data abrir_cartao" >
                        <div class="description-add-card" onclick="abrir_modal_cartao()">
                            {/* <img src={} alt="" /> */}
                                <p>Novo método de pagamento</p>
                        </div>
                    </div>
                    <div class="box-card-data">
                        <div class="description-card-data">
                            <p>Diogo Santana</p>
                            <p>•••• •••• •••• 5532</p>
                        </div>
                        <div class="description-card-data">
                            <span class="icon-card">M</span>
                            <p>Excluir</p>
                        </div>
                    </div>
                    <div class="box-card-data">
                        <div class="description-card-data">
                            <p>Diogo Santana</p>
                            <p>•••• •••• •••• 9990</p>
                        </div>
                        <div class="description-card-data">
                            <span class="icon-card">M</span>
                            <p>Excluir</p>
                        </div>
                    </div>
                </div>
                <div class="button-save-or-delete">
                    <button>Salvar alterações</button>
                    <button class="desativar_conta_button">Desativar conta</button>
                </div>
            </div>
        </section>
    );
}