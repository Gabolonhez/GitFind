import { Header } from "../../components/Header";
import background from "../../assets/images/background-github.png";
import profile from "../../assets/images/Me.png";
import ItemList from "../../components/ItemList";


import "./styles.css";

function App () {
  return (
    <div className="App">
      <Header></Header> 
      <div className="content">
          <img src={background} className="background" alt="Background image"></img>
          <div className="info">
            <div>
              <input  name="user" placeholder="@username"></input>
              <button>Search</button>
            </div>
            <div className="profile-div">
              <img src={profile} className="profile" alt="Profile image"></img>
              <div className="profile-infos">
                <h3>Gabriel Bolonhez</h3>
                <span>@gabrieltr1</span>
                <p>Description</p>
              </div>
            </div>
            <hr></hr>
            <div className="repositories">
              <h3>Repositórios</h3>
              <ItemList title="Test1" description="Testing"></ItemList>
              <ItemList title="Test1" description="Testing"></ItemList>
              <ItemList title="Test1" description="Testing"></ItemList>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
