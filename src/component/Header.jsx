import logo from "../images/Vector.png";

const Header = () => {
  return (
    <div className="container-fluid navbar">
      <header className="container d-flex justify-content-between align-items-center">
        <div className="logo d-flex justify-content-center align-items-center">
          <img src={logo} alt="logo" width="60px" />
          <h1 className="text-white">MemeGenerator</h1>
        </div>
        <div className="about-course">
          <h5 className="text-white">React Course - Project 3</h5>
        </div>
      </header>
    </div>
  );
};

export default Header;
