import React from 'react'

export const ProjectTag = ({ name, onClick, isSelected}) => {

    const buttonStyles = isSelected
    ? "text-white border-blue-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button className={`${buttonStyles} rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer`} 
    onClick={() => onClick(name)}
    >
       {name}
    </button>
  )
};

export default ProjectTag;