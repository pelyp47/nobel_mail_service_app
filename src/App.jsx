import React, { Component } from 'react';
import LoginForm from './views/LoginForm';
import Home from './views/Home'; // Import your Home component
import '/@/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn: false,
        };
    }

    handleLoginSuccess = () => {
        this.setState({ isUserLoggedIn: true });
    }

    render() {
        return (
            <div className="App">
                {!this.state.isUserLoggedIn ? (
                    <LoginForm onLoginSuccess={this.handleLoginSuccess} />
                ) : (
                    <Home /> // Render Home component or other authenticated content
                )}
            </div>
        );
    }
}

export default App;