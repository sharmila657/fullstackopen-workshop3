let SayHello = ({ person }) => {
  //   return React.createElement("h1", { id: "myId" }, `Hello ${props.firstName}`);

  // const getFullName = () => {
  //   return `${person.firstName} ${person.lastName}`;
  // };
  const getFullName = () => `${person.firstName} ${person.lastName}`;

  return <h1 id="myID">Hello {getFullName()}</h1>;
};

export default SayHello;
