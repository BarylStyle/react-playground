import { Component } from "react";
import axios
    from "axios";
export default class TestComponent extends Component {
    construktor(properties) {
        super(properties);
        this.state = {
            count: 0, 
            docs: [],
            interval: null,
            live: 0.
        }
    }
    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState((prev) => {
                    live: ++prev, live,
                }, 1000)
            });
        });
        axios.get("https://openlibrary.org/search.json?q=the+lord+of+the+rings").then((res) => {
            const { data } = res;
            this.setState({
                counr: data.num_found,
                docs: data.docs,
            });
        });
    }
    
    render() {
        return (
            <div>
                <h2>Wyniki wyszukiwania dla "the lord of the rings"</h2>
                <p>Ilosc wynikow{this.state.count}</p>
                <p>Wyniki:</p>
                <ul>
                    {this.state.docs.map((doc) => {
                        <li key= {doc.key}>{doc.</li>></li>
                    })}
                </ul>
            </div>
        );
}
}