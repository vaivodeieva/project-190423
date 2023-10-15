import '../Assets/CSS/Header.css';

function Header() {

  return (
    <div>
      <div id='header-body'>
        <nav id='header-nav'>
          <div className="menu">
            <p>Webpage</p>
            <button id='header-btn'>Sign up</button>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default Header;