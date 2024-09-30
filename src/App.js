import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Amakavanny } from './app/component/amakavanny';
import Esther from './app/component/array';
import She from './app/component/array/work';
import { Users } from './app/component/array/work/work';
import ClickMe from './app/component/button/button';

import ColorBoxxx from './app/component/colorwork/colorwork';
import Joy from './app/component/counter/counter';

import Welcome from './app/component/greetings';
import LoginForm from './app/component/loginpage';

import Osose from './app/component/osose/osose';
import UserDetail from './app/component/users';
import NotFound from './app/component/notfound/notfound';
import Effect from './app/component/Effect';
import Timer from './app/component/element';



function App() {
  return (
    <div className="App">
      {/* <LoginForm />
      <Welcome name="vanessa" />
      <Amakavanny/>
      <Esther/>
      <She/>
      
      <Joy/>
      
      <Osose /> */}
      <Routes>
       {/* /* <Route path="/" element={<Welcome/>} /> */}
         <Route path = "/loginform" element={<LoginForm replace to="/login"/>} /> 
         <Route path="/"element ={<UserDetail/>} />
         <Route path="/user"element ={<UserDetail/>} />
         <Route path="*" element ={<NotFound/>} />
         <Route path="/element"element={<Effect/>}/>
         <Route path="/timer"element={<Timer/>}/>
      </Routes>
      


    </div>
  );
}

export default App;
