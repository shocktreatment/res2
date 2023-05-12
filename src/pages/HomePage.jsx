const HomePage = () => {
  return (
    <div
      style={{
        margin: "0px",
      }}
    >
      <h1>HomePage</h1>
      <p>Hello. Welcome to our site. We can make your live better!</p>
      <div
        style={{
          padding: "50px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          position: "absolute",
          top: "80px",
          left: "-100px",
          // backgroundColor: "#0852234d",
          backgroundColor: "#0852232b",
          zIndex: "-1",
        }}
      ></div>
      {/* <div
        style={{
          padding: "40px",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: '1.5px solid',
          position: "absolute",
          top: "185px",
          left: "25px",
          backgroundColor: "#fff",
          zIndex: "-1",
        }}
      ></div> */}
    </div>
  );
};

export default HomePage;
