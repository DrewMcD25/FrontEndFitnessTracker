const App = () => {
    const [isNewUser, setIsNewUser] = useState(true)
    const [postList, setPostList] = useState([])
    const renderAuthForm = (e) => {
        if (isNewUser) {
            return <Login toggleNewUser={setIsNewUser} />
        } else {
            return <Register toggleNewUser />
        }

    }

    return (
        <>
            <Router>
                <div id="navbar">
                    <Navbar />
                </div>
                <main>
                    <Switch>
                        <div>
                            <Route exact path="/login"><Login /></Route>
                            <Route exact path="/activities"><Activities/></Route>
                            <Route exact path="/myroutines"><My_Routines/></Route>
                            <Route exact path="/register"><Register /></Route>
                            <Route exact path="/"><Home /></Route>
                            <Route exact path="/routines"><Routines/></Route>
                        </div>
                    </Switch>
                </main>
            </Router>



        </>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));