import '../Assets/CSS/Header.css';

function Header() {

  return (
    <div>
      <nav>
        <div className="menu">
          <p>Webpage</p>
          <button>Sign up</button>
        </div>
        <div className="backdrop"></div>
      </nav>

      <main>
        <h1>Header</h1>
        <p>Text goes here</p>
        <a href="/" target="_blank"><button>Source</button></a>
      </main>
    </div>
  )
}
export default Header;