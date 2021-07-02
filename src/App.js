import { Route, Switch } from 'react-router'

const App = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={DisplayError} />
        </Switch>
    )
}

export default App