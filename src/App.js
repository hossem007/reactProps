import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';
import ImgProfile from './img/profileP.png'



function App() {

  const Data = {

    fullname:"Bahloul Hossem Eddine",
    bio:".....",
    profession:"Nurse"
  }

  const handleName = (name)=> {alert(`the name of the profile user is ${name}`)}

  return (
    <div className="App">
      
      <Profile data={Data} handleName={handleName}>

        <img src={ImgProfile} alt="" width="300px" />
      </Profile>
     
    </div>
  );
}

export default App;
