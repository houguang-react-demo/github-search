import React, {Component} from 'react';
import './item.css'

class Item extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div className="card">
                <a href={this.props.user.html_url} target="_blank" rel="noreferrer">
                    <img
                        src={this.props.user.avatar_url}
                        alt=""
                        style={{width: "100px"}}
                    />
                </a>
                <p className="card-text">{this.props.user.login}</p>
            </div>
        );
    }
}

export default Item;