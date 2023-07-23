import '../Assets/CSS/Home.css';

function Home() {
    window.addEventListener("scroll", function () {
        const header = document.getElementById("header"),
         scroll = window.pageYOffset | document.body.scrollTop;
       
        if (scroll > 1) {
         header.className = "header fixed-top scrolled";
        } else if (scroll <= 1) {
         header.className = "header fixed-top";
        }
       });
       
    return (
        <div>
            <div id="header" className="header fixed-top">
                <header>
                    <div className="sticky-header bg-dark">Sticky Header</div>
                    <div className="searchbar bg-light">Hidden Bar</div>
                </header>

                <div className="bg-dark">Sticky Bar</div>
            </div>
        </div>
    )
}
export default Home;