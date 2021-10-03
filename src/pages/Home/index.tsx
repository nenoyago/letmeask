import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';
import { database } from '../../services/firebase';

import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

import { Button } from '../../components/Button';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import '../../styles/pages/auth.scss';

export function Home() {
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  const history = useHistory();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error('Room does not exists');
      return;
    }

    if (roomRef.val().closedAt) {
      toast.error('Room already closed');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Google logo" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o codigo da sala"
              value={roomCode}
              onChange={event => setRoomCode(event.target.value)}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
      <Toaster />
    </div>
  );
}
