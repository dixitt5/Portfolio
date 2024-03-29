import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
      <a href={item.href} target="_blank" >
              
        <img className="rounded-2xl" src={item.image} alt="" />
            </a>
        <p
          className="capitalize text-accent text-sm mb-3 mt-4"
        >
          {item.category}
        </p>
        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      </div>
    </div>
  );
};

export default Project;
