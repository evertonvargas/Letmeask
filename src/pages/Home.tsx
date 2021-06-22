// recuperar o contexto
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button';
import { TestContext } from '../App' 
import firebase from 'firebase';
import { auth } from '../services/firebase';
import '../styles/auth.scss'

export function Home() {
  const history = useHistory();
  const {value, setValue} = useContext(TestContext)

  function navigateToNewRoom(){
    // para fazer autenticação com o Google
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider).then(result=>{
      console.log(result)
      history.push('/rooms/new')
    })
  }

  return (
  <div id="page-auth">
    <aside>
      <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo real</p>
    </aside>
    <main>
      <h1>{value}</h1>
      <div className="main-content">
        <img src={logoImg} alt="Letmeask" />
        <button onClick={navigateToNewRoom} className="create-room">
          <img src={googleImg} alt="Logo do Google" />
          Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
              type="text" 
              placeholder="Digite o código da sala"
            />
            <Button type="submit">Entrar na Sala</Button>
          </form>
      </div>
    </main>
  </div>);
}
 