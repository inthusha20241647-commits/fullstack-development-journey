import ListItem from "./ListItem";
const List = () => {
  const Activities = [
    "Wake up at 6 am",
    "Go to the Gym",
    "Have a cup of Cofee",
  ];

  return (
    <>
      <h1>List of Activities</h1>
      <div>
        {Activities.map(function (item) {
          return <ListItem activities={item} />;
        })}
      </div>
    </>
  );
};
export default List;
