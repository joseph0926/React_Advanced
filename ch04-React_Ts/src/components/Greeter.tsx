import React from "react";

interface GreeterProps {
  name: string;
}

const Greeter = ({ name }: GreeterProps): JSX.Element => {
  return <div>{name}</div>;
};

export default Greeter;
