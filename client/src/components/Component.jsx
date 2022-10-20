import "../styles/App.css";

const Component = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="parent">
          <h1>{item.name}</h1>
          <h2>{item.price}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default Component;
