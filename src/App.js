import './App.css';
import UserCard from './components/UserCard';

const utilisateur = {
  nom: "Doe",
  prenom: "John",
  email: "john.doe@example.com",
  ImageUrl: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png",
 };

function App() {
  return (
    <div>
      <UserCard nom={utilisateur.nom} prenom={utilisateur.prenom}  email={utilisateur.email} imageUrl={utilisateur.ImageUrl}/>   
    </div>
  );
}

export default App;
