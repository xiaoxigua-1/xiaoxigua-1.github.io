import React, {FC} from 'react';
import Link from './link/link';
import Discord from './svg/discord.svg';
import Twitter from './svg/twitter.svg';
import GitHub from './svg/github.svg';
import RSS from './svg/rss.svg';
import './sass/about.sass';

const About: FC = () => {
  return (
    <div className="section">
      <div id="about">
        <h1>About me</h1>
        <p>
          台南高工的某位廢物，不會寫程式成績也爛的可以，不會Python也不會C#每天被Young嘲諷的可憐傢伙。
          <br />
          貢獻Deno_std, Vlang等專案
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
          <Link
            src={RSS}
            title="Blog"
            color="#004daa"
            click={true}
            href="https://xiaoxigua-1.github.io/blog/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
