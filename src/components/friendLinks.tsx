import React, {FC} from 'react';
import Tilt from 'react-parallax-tilt';
import ntihs from './svg/ntihs-logo.svg';
import './sass/friendLinks.sass';

const data = [
  {
    title: '台南高工網頁社',
    link: 'https://ntihs-it.github.io/',
    avatar: ntihs,
  },
];

const FriendLinks: FC = () => {
  return (
    <div className="section">
      <div className="friend-links">
        {data.map((friend) => {
          return (
            <a key={friend.title} href={friend.link} className="link">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={1}
                glareBorderRadius={'7px'}
              >
                <img src={friend.avatar} />
                <h2>{friend.title}</h2>
              </Tilt>
            </a>

          );
        })}
      </div>
    </div>
  );
};

export default FriendLinks;
