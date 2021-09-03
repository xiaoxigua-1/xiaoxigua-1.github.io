import React, {FC} from 'react';
import Link from './link';
import Discord from './discord.svg';
import Twitter from './twitter.svg';
import GitHub from './github.svg';
import './about.sass';

const About: FC = () => {
  return (
    <div className="section">
      <div id="about">
        <h1>About me</h1>
        <p>
          台南高工的某位廢物，不會寫程式成績也爛的可以，不會Python也不會C#每天被Young嘲諷的可憐傢伙。
        </p>
        <div id="contact">
          <Link
            src={Discord}
            title="xiao xigua#8787"
            color="#004daa"
          />
          <Link
            src={Twitter}
            title="@XiguaXiao"
            color="#0C72B7"
            click={true}
            href="https://twitter.com/XiguaXiao"
          />
          <Link
            src={GitHub}
            title="xiaoxigua-1"
            color="#000000ff"
            click={true}
            href="https://github.com/xiaoxigua-1"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
