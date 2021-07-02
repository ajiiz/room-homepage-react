import { Route, Switch, Redirect } from "react-router-dom"

import Home from "./components/Home"
import Shop from "./components/Shop"
import About from "./components/About"
import Contact from "./components/Contact"

const App = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/"><Redirect to="/home" /></Route>
        </Switch>
    )
}

export default App