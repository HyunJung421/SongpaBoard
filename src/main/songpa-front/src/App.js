import logo from './logo.svg';
import './App.css';
import Layout from 'components/layout/Layout';
import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState([]);
    useEffect(() => {
        fetch("/hello")
            .then((response) => {
                return response.json();
            })
            .then(function (data) {
                setMessage(data);
            });
    }, []);

    return (
        <div className="App">
            <Layout>
                <nav>
                    <div className='blog'>
                        <img src={logo} className="App-logo" alt="logo" />
                        <ul>
                            {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)}
                        </ul>
                    </div>
                </nav>
            </Layout>
        </div>
    );
}

export default App;

