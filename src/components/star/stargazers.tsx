import React, {FC, useState, useEffect} from 'react';
import axios from 'axios';
import './stargazers.sass';

interface Stargazer {
  id: number,
  login: string
}

const Star: FC<{src: string}> = ({src}) => {
  const [stargazers, setStargazers] = useState<Array<Stargazer>>([]);

  useEffect(() => {
    axios.get(`https://api.github.com/repos/${src}/stargazers`)
        .then((data) => {
          setStargazers(data.data);
        });
  }, []);

  return (
    <div
      className={
        (stargazers.length ? 'stargazers' : 'no-stargazers') +
            ((stargazers.length > 4) ? ' stargazers-max' : '')
      }
    >
      {stargazers.map((stargazer) =>{
        return (
          <div key={stargazer.id} className="stargazer">
            <div className="avatar" title={stargazer.login}>
              <img src={stargazer['avatar_url']} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Star;
