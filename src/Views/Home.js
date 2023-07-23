import '../Assets/CSS/Home.css';

function Home() {
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