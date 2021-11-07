import React, {Component} from 'react';
import './item.css'

class Item extends Component {
    render() {
        const {html_url,avatar_url,login} = this.props.user
        return (
            <div className="card">
                <a href={html_url} target="_blank" rel="noreferrer">
                    <img
                        src={avatar_url}
                        alt=""
                        style={{width: "100px"}}
                    />
                </a>
                <p className="card-text">{login}</p>
            </div>
        );
    }
}

export default Item;