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
    <div className="stargazers">
      {stargazers.map((stargazer) =>{
        return (
          <div key={stargazer.id} className="stargazer">

          </div>
        );
      })}
    </div>
  );
};

export default Star;
