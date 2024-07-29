
import react, {Fragment, useEffect} from 'react';
import{ BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';

// Redux
import { loadUser } from './actions/auth';
import { Provider} from 'react-redux';
import store from './store'; 
import setAuthToken from './utils/setAuthToken';
import './App.css';
if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = ()=> {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return(
    <div>
      <Provider store={store}>
    <Router>
      <Navbar/>
  
       <Alert/>
      
        <Routes>  
        <Route exact path='/' Component={Landing}/>
        <Route exact path='/register' Component={Register}/>
        <Route exact path='/login' Component={Login}/>
        <Route exact path='/profile/:id' Component={Profile}/>
      


        </Routes>

        <PrivateRoute exact path='/dashboard' Component={Dashboard}/>
        <PrivateRoute exact path='/profiles' Component={Profiles}/>
        <PrivateRoute exact path='/create-profile' Component={CreateProfile}/>
        <PrivateRoute exact path='/edit-profile' Component={EditProfile}/>
        <PrivateRoute exact path='/add-experience' Component={AddExperience}/>
        <PrivateRoute exact path='/add-education' Component={AddEducation}/>
        <PrivateRoute exact path='/posts' Component={Posts}/>
        <PrivateRoute exact path='/posts/:id' Component={Post}/>
    </Router>
    </Provider>
    
    </div>
    
  )
}
export default App;
