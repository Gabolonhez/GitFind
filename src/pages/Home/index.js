import { useState } from 'react';
import { Header } from "../../components/Header";
import background from "../../assets/images/background-github.png";
import ItemList from "../../components/ItemList";


import "./styles.css";

function App () {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch (`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({ avatar_url, name, bio, login})

      const reposData = await fetch (`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header></Header> 
      <div className="content">
          <img src={background} className="background" alt="Background image"></img>
          <div className="info">
            <div>
              <input name="user" placeholder="@username" value={user} onChange={event => setUser(event.target.value)}></input>
              <button onClick={handleGetData}>Search</button>
              </div>
              {currentUser?.name ? ( 
                <>
                <div className="profile-div">
                <img src={currentUser.avatar_url} className="profile" alt="Profile image"></img>
                <div className="profile-infos">
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr></hr>
              </>
            ) : null}
            {repos?.length ? (
            <div className="repositories">
              <h3>Repositórios</h3>
              {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description} link={repo.html_url}></ItemList>
              ))}
            </div>
             ): null }
          </div>
      </div>
    </div>
  );
}

export default App;
