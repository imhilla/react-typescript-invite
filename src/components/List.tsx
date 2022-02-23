import React from "react";
import { ISstate as Props } from "../App";
interface IPrope {
  people: Props["people"];
}

const List: React.FC<IPrope> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      console.log(person);
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.img} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
