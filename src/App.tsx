import React, {FC} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/AboutMe';
import Projects from './components/projects';
import FriendLinks from './components/FriendLinks';
import './App.css';

const anchors = ['Home', 'About-me', 'My-Prjoect', 'Friend-Links'];
const navigation = ['Home', 'About Me', 'My Prjoect', 'Friend Links'];

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
        sectionsColor={['#282c34', '#191d27', '#060f14']}
        infinite={true}
        render={({state, fullpageApi}) => {
          return (
            <div>
              <Home />
              <About />
              <Projects />
              <FriendLinks />
            </div>
          );
        }}
      />
    </div>
  );
};

export default App;
