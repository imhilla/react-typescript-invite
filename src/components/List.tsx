import React from "react";
interface IPrope {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List: React.FC<IPrope> = ({ people }) => {
  return <div>List</div>;
};
export default List;
