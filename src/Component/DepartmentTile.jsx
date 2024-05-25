function DepartmentTile({ img, text, handleClick }) {
  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid black",
        margin: "15px",
        cursor: "pointer",
        height: "50px",
        width: "200px",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
      }}
      onClick={() => handleClick()}
      class={"rounded"}
    >
      <div
        style={{
          border: "1px solid black",
          height: "40px",
          width: "40px",
          backgroundColor: " #edfefb",
        }}
        class={"rounded text-center"}
      >
        {img}
      </div>
      <h6>{text}</h6>
    </div>
  );
}

export default DepartmentTile;
