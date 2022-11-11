import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
//import InfoPage from "./pages/InfoPage";
import Navigation from './components/Navigation';
import AddNotePage from "./pages/AddNotePage";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/api';
import {ThemeProvider} from "./contexts/ThemeContext"
import InfoPageWrapper from './pages/InfoPage';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          // mendapatkan nilai tema baru berdasarkan state sebelumnya
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          // menyimpan nilai tema baru ke local storage
          localStorage.setItem('theme', newTheme);
 
          // mengembalikan dengan nilai theme terbaru.
          return {
            theme: newTheme
          };
        });
      }
    }
    
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount(){
    const {data} = await getUserLogged();
    this.setState(() => {
      return{
        authedUser: data,
        initializing: false
      }
    })
    document.documentElement.setAttribute('data-theme', this.state.theme);

  }

  async onLoginSuccess({accessToken}){
    putAccessToken(accessToken);
    const {data} =  await getUserLogged();

    this.setState(()=> {
      return{
        authedUser: data,
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }
  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }

  render(){
    if (this.state.initializing) {
      return null;
    }
    if(this.state.authedUser === null){
      return(
        <ThemeProvider value={this.state}>
        <div className='app-container'>
          <header>
          <h1>Aplikasi Catatan</h1>
        </header>
        <main>
        <Routes>
          <Route path='/*' element={<LoginPage loginSuccess={this.onLoginSuccess}/>} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
        </div>
        </ThemeProvider>
      )
    }

    return (
      <ThemeProvider value={this.state}>

      <div className="app-container">
        <header>
          <h1><Link to="/">Aplikasi Catatan</Link></h1>
          <Navigation logout={this.onLogout}/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/notes/:id' element={<InfoPageWrapper />} />
            <Route path='/add' element={<AddNotePage />} />
          </Routes>
        </main>
      </div>
      
      </ThemeProvider>
    );
  }
}

export default App;