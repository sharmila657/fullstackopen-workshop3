import SayHello from "./SayHello";

let App = () => {
  let peopleArray = [
    { firstName: "Sharmila", lastName: "Jirel", id: 101 },
    { firstName: "Aarju", lastName: "Pariiyar", id: 201 },
    { firstName: "Lishu", lastName: "Maharjan", id: 301 },
  ];
  return (
    <div>
      {peopleArray.length > 0 ? (
        peopleArray
          .filter((person) => person.id < 250)
          .map((value) => <SayHello person={value} key={value.id} />)
      ) : (
        <h1>No data found</h1>
      )}
    </div>
  );
};

export default App;
