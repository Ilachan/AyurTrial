import React, { useState }  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/pages/Homepage/Home';
import HomeRemedy from '../components/pages/HomeRemedy/HomeRemedy';
import { RegisterProperty } from '../components/RegisterProperty'
import propertyList from '../components/pages/PropertyListing'
import PropertyItem from '../components/PropertyItem'
import '../components/App.css'
import Blog from '../components/pages/Blog/Blog';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar/index'
import Footer from '../components/Footer/index'



function RouteConfig() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div >
            <Router>
                <Navbar toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/HomeRemedy" component={HomeRemedy} />
                    <Route exact path="/RegisterProperty" component={RegisterProperty} />
                    <Route exact path="/property" component={propertyList} />
                    <Route exact path="/Blog" component={Blog} />
                    
                    <Route path="/property/:id" component={PropertyItem} />
                    <Route path="*" component={() => <h2> 404 Not Found</h2>} />

                </Switch>
                <Footer />
            </Router>

        </div>

    )

}
export default RouteConfig;