import React, {useState, useEffect, FC} from 'react';
import axios from 'axios';

const Proportion: FC<{url: string}> = ({url}) => {
  const [lan, setLan] = useState<any>([]);
  const [codeNumber, setCodeNumber] = useState(0);
  useEffect(() => {
    axios.get(
        `https://api.github.com/repos/${url}/languages`,
        {headers: {Authorization: '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'}},
    ).then((data) => {
      const lanList:Array<any> = [];
      for (const key in data.data) {
        if (key) {
          setCodeNumber(codeNumber + data.data[key]);
          lanList.push([key, data.data[key]]);
        }
      }
      setLan(lanList);
    });
  }, []);

  const lanClass = (lan: string): string => {
    if (lan === 'C#') return 'CS';
    else if (lan === 'C++') return 'Cpp';
    else return lan;
  };
  return (
    <div className="proportion">
      {lan.map((lanData) => {
        return (
          <div
            className={
              lanClass(lanData[0]) + ' languages'
            }
            key={lanData[0]}
            style={{
              width: `${(lanData[1] / codeNumber) * 100}%`,
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
