
function Header() {
  return (
    <header>
      <h1>SAFARIS INC</h1>
      <nav>
        <ul>
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
}

export default Header;