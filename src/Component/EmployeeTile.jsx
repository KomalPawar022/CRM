function EmployeeTile({ img, text, handleClick }) {
  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid black",
        margin: "15px",
        height: "50px",
        width: "200px",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
      }}
      class={"rounded"}
      onClick={handleClick}
    >
      <img
        src={img}
        alt="Img"
        style={{
          border: "1px solid black",
          height: "40px",
          width: "40px",
        }}
      />

      <h6>{text}</h6>
    </div>
  );
}
export default EmployeeTile;
