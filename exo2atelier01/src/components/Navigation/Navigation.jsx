import { Component } from "react";
import './navigation.css'

class Navigation extends Component {

    render() { 
        return <div className="nav">
            <ul>
                <li><a href="">Item 1</a></li>
                <li><a href="">Item 2</a></li>
                <li><a href="">Item 3</a></li>
                <li><a href="">Item 4</a></li>
                <li><a href="">Item 5</a></li>
                <li><a href="">Item 6</a></li>
            </ul>
        </div>;
    }
}
 
export default Navigation;