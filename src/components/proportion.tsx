import React, {useState, useEffect, FC} from 'react';
import axios from 'axios';

const Proportion: FC<{url: string}> = ({url}) => {
  const [lan, setLan] = useState<any>([]);
  useEffect(() => {
    axios.get(`https://api.github.com/repos/${url}/languages`)
        .then((data) => {
          const lanList:Array<any> = [];
          for (const key in data.data) {
            if (key) {
              const lanData = {};
              lanData[`${key}`] = data.data[key];
              // console.log(lanData);
              lanList.push(lanData);
            }
          }
          setLan(lanList);
        });
  }, []);
  return (
    <div className="proportion">
      <div></div>
    </div>
  );
};

export default Proportion;
