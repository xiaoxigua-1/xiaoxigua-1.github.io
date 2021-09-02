import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/home';
import './App.css';

const anchors = ['Home', 'secondPage', 'thirdPage'];
const App = () => (
  <ReactFullpage
    // fullpage options
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
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
);

export default App;
