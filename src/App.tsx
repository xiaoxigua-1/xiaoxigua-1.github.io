import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/home';
import Navbar from './components/navbar';
import './App.css';

const anchors = ['Home', 'About-me', 'thirdPage'];
const navigation = ['Home', 'About me', 'thirdPage'];
const App = () => {
  return (
    <div>
      <Navbar />
      <ReactFullpage
        // fullpage options
        meun="#menu"
        anchors={anchors}
        navigation
        navigationTooltips={navigation}
        sectionsColor={['#282c34', '#ff5f45', '#0798ec']}
        render={({state, fullpageApi}) => {
          return (
            <div>
              <Home />
              <div className="section">
                <p>Section 2</p>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default App;
