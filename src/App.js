
import './App.css';
import React, {Component} from 'react';
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Splash from "./components/Splash";

class App extends Component {

    render() {

        return (
            <div className="rw-site">
                <Header/>
                <Content>
                    <Splash/>
                </Content>
                <Footer/>
            </div>
        );
    }
}

export default App;
