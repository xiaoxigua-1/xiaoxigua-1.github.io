import React, {FC} from 'react';
import './link.sass';

const Link: FC<{
  src: string,
  title: string,
  color: string,
  click?: boolean,
  href?: string
}> = ({src, title, color, click = false, href = ''}) => {
  return (
    click ? (
      <a id="link" style={{backgroundColor: color}} href={href}>
        <img src={src} />
        <span>{title}</span>
      </a>
    ) : (
      <div
        id="link"
        className="copy"
        style={{backgroundColor: color}}
        onClick={() => {
          navigator.clipboard.writeText(title);
        }}
      >
        <img src={src} />
        <span>{title}</span>
      </div>
    )
  );
};

export default Link;
