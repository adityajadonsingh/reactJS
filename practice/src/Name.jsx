const Name = (props) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          props.setName(e.target.value);
        }}
      />
      <p>
        <strong>Name</strong>
      </p>
      <p>{props.name}</p>
    </>
  );
};

export default Name;
