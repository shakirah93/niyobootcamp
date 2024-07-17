import "./List.css";

function List(props) {
  return (
    <div className="list">
      <img src={props.srcProps} alt={props.altProps} />
      <h5>{props.title}</h5>
      <p>{props.details}</p>
    </div>
  );
}

export default List;
