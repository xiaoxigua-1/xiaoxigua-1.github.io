import React, {useState, useEffect, FC} from 'react';
import axios from 'axios';

const Proportion: FC<{url: string}> = ({url}) => {
  const [lan, setLan] = useState<Array<any>>([]);
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

  const lanClass = (lan: string, index: number): string => {
    const lanData = {'C#': 'CS', 'C++': 'Cpp'};
    return (lanData[lan] || lan);
  };
  return (
    <div className="proportion">
      {lan.map((lanData, index) => {
        return (
          <div
            className={
              lanClass(lanData[0], index) + ' languages'
            }
            key={lanData[0]}
            style={{
              width: `${(lanData[1] / codeNumber) * 100}%`,
              borderTopLeftRadius: index ? '' : '20px',
              borderBottomLeftRadius: index ? '' : '20px',
              borderTopRightRadius: (index === lan.length - 1) ? '20px' : '',
              borderBottomRightRadius: (index === lan.length - 1) ? '20px' : '',
            }}
          >
          </div>
        );
      })}
    </div>
  );
};

export default Proportion;
