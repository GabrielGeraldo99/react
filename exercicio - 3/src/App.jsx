import Profile from "./components/Profile";
import profileImg from './assets/profile.jpeg'; 

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={profileImg}
        name="Gabriel Geraldo"
        bio="Desenvolvedor Full-stack Junior"
        email="gabrielgeraldo165@gmail.com"
        phone="(11) 97453-2005"
        githubUrl="https://github.com/GabrielGeraldo99"
        linkedinUrl="https://www.linkedin.com/in/gabriel-geraldo"
        instagramUrl="https://www.instagram.com/gabriel_geraldo99"
      />
    </div>
  );
}
