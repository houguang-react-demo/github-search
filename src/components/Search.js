import React, {Component} from 'react';
import pubSub from "pubsub-js";

class Search extends Component {

    wordRef = React.createRef()
    getData = async () => {
        //双重解构并且重命名
        const {value: word} = this.wordRef.current;
        pubSub.publish("users", {
            isLoading: true,
            isFirst: false
        })

        //使用axios发送请求
        // axios.get(`https://api.github.com/search/users?q=${word}`).then(
        //     res=>{
        //         pubSub.publish("users",{
        //             users:res.data.items,
        //             isLoading: false,
        //             isFirst: false
        //         })
        //     },
        //     err=>{
        //         pubSub.publish("users",{err:err.message})
        //     }
        // )

        //使用fetch发送请求
        try {
            const res = await fetch(`https://api.github.com/search/users?q=${word}`)
            const data = await res.json()
            pubSub.publish("users", {
                users: data.items,
                isLoading: false,
            })
        } catch (e) {
            pubSub.publish("users", {err: e.message, isLoading: false})
        }
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