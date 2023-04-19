
function App() {
  return (
    <div >
            <Router>
                <Header />
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/categories">
                        <Categories />
                    </Route>

                </Switch>
                <Footer />
            </Router>

        </div>
  );
}

export default App;
