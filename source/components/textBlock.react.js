import React from 'react';

const textBlock = (date, text, user) => (

   <div>
      <span>{user}</span>
      <span>{text}</span>
      <span>{date}</span>
  </div>

);

export default textBlock;
