import React from "react";

const Field = ({ isSpace }: { isSpace: boolean }) => {
  let classname = `      
    w-16 h-16 mx-4 mb-10 border-b-4
    flex justify-center align-center 
  `;

  if (!isSpace) classname += " border-orange";
  else classname += " border-transparent";

  return <div className={classname} />;
};

export default Field;
