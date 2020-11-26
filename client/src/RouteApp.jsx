import React from 'react';
import { Link, Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import './RouteApp.css';


function withMatch(Component) {
    return function(props){
        var match = useRouteMatch();
        console.log(match);

        return (
            <Component match={match} {...props}></Component>
        );
    }
}

var HomeContainer = withMatch(Home);
var CategoryContainer = withMatch(Category);
var ProductsContainer = withMatch(Products);
var ItemContainer = withMatch(Item);

function Home() {
    return(
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Item(props) {
    var {match: {params}} = props
    console.log(props);
    return(
        <div>
            <h4>Item: {params.item}</h4>
        </div>
    );
}

function Category(props) {
    var {match: {url}} = props;
    console.log(url);
    return(
        <div>
            <ul>
                <li>
                    <Link to={`${url}/shoes`}>Shoes</Link>
                </li>
                <li>
                    <Link to={`${url}/boots`}>Boots</Link>
                </li>
                <li>
                    <Link to={`${url}/footwear`}>Footwear</Link>
                </li>
            </ul>


        </div>
    );
}

function Products() {
    return(
        <div>
            <h2>Products</h2>
        </div>
    );
}

function RouteApp() {

    return (
        <div>
            <nav className="navbar navbar-light" >
                <ul className="navbar navbar-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="category">Category</Link>
                    </li>
                    <li>
                        <Link to="products">Products</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/" exact>
                    <HomeContainer></HomeContainer>
                </Route>
                <Route exact path="/category">
                    <CategoryContainer></CategoryContainer>
                </Route>
                <Route exact path="/products">
                    <ProductsContainer></ProductsContainer>
                </Route>
                <Route path={"/category/:item"}>
                    <ItemContainer></ItemContainer>
                </Route>
                <Route>
                    <Redirect to="/"></Redirect>
                </Route>
            </Switch>
        </div>
    );
}

export default RouteApp;