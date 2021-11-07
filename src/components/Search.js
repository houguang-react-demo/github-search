import React, {Component} from 'react';
import axios from "axios";
import pubSub from "pubsub-js";

class Search extends Component {

    wordRef = React.createRef()
    getData = () => {
        //双重解构并且重命名
        const {value:word} = this.wordRef.current;
        pubSub.publish("users",{isLoading: true})
        axios.get(`https://api.github.com/search/users?q=${word}`).then(
            res=>{
                pubSub.publish("users",{
                    users:res.data.items,
                    isLoading: false,
                    isFirst: false
                })
            },
            err=>{
                pubSub.publish("users",{err:err.message})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={this.wordRef} type="text" placeholder="请输入用户名"/>&nbsp;
                    <button onClick={this.getData}>搜索</button>
                </div>
            </section>
        );
    }
}

export default Search;