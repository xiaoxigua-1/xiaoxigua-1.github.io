import React, {useState, useEffect, FC} from 'react';
import axios from 'axios';

const Proportion: FC<{url: string}> = ({url}) => {
  const [lan, setLan] = useState<any>([]);
  const [codeNumber, setCodeNumber] = useState(0);
  useEffect(() => {
    axios.get(`https://api.github.com/repos/${url}/languages`)
        .then((data) => {
          const lanList:Array<any> = [];
          for (const key in data.data) {
            if (key) {
              setCodeNumber(codeNumber + data.data[key]);
              lanList.push([key, data.data[key]]);
            }
          }
          setLan(lanList);
          console.log(url, lanList, codeNumber);
        });
  }, []);
  return (
    <div className="proportion">
      {lan.map((lanData) => {
        return (
          <div
            className={
              (lanData[0] === 'C#') ? 'CS' : lanData[0] + ' languages'
            }
            key={lanData[0]}
            style={{
              width: `${(codeNumber / lanData[1]) * 100}%`,
              height: '120%',
            }}
          >
          </div>
        );
      })}
    </div>
  );
};

export default Proportion;
