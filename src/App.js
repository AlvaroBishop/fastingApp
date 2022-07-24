import Content from "./shared/layout/Content";
import {element} from 'prop-types';
import { Header } from "./shared/layout/Header";
import './App.css';
import { useEffect } from "react";



function App(props) {
  

  useEffect(() => {
    const html = document.querySelector('html');

    const time = new Date();
    
    
   
    time.getHours() % 12 > 12 && html.classList.add('dark');
  }, []);

  return (
    <div className="App">
      <Header/>
      <Content>
        {props.children}
      </Content>
    </div>
  );
}

App.propTypes = {
  children: element.isRequired,
}
export default App;
