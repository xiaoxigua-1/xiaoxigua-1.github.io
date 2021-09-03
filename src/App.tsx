import React, {FC} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/AboutMe';
import './App.css';

const anchors = ['Home', 'About-me', 'thirdPage'];
const navigation = ['Home', 'About me', 'thirdPage'];
const App: FC = () => {
  return (
    <div>
      <Navbar />
      <ReactFullpage
        // fullpage options
        meun="#menu"
        anchors={anchors}
        navigation
        navigationTooltips={navigation}
        sectionsColor={['#282c34', '#191d27', '#0798ec']}
        render={({state, fullpageApi}) => {
          return (
            <div>
              <Home />
              <About />
            </div>
          );
        }}
      />
    </div>
  );
};

export default App;
