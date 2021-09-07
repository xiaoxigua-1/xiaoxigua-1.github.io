import React, {FC, useState} from 'react';
import Stargazers from './star/stargazers';

const Star: FC<{
  url: string,
  stargazersCount: number
}> = ({url, stargazersCount}) => {
  const [moveStar, setMoveStar] = useState(false);

  return (
    <div
      className="star"
      onMouseOut={() => {
        setMoveStar(true);
      }}
    >
      <li className="fas fa-star"></li>
      <span>{stargazersCount}</span>
      {
        (moveStar && stargazersCount) ?
            <Stargazers src={url}/> :
            <div></div>
      }
    </div>
  );
};

export default Star;
