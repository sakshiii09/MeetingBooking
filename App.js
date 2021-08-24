import './App.css';
import { Detail } from './component/Detail';
import {Header} from './component/Header';
import Calendar from 'react-calendar';
import React, { useState } from 'react';


function App() {
  const [value, onChange] = useState(new Date());
  return (
   <>
   <Header/>
   <Detail/>
  
   </>
  );
}

export default App;
