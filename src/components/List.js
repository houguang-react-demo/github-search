import Item from "./Item";
import {Component} from "react";
import pubSub from "pubsub-js";

class List extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    componentDidMount() {
        this.token = pubSub.subscribe("users",(msg,data)=>{
            console.log(msg,data)
            this.setState(data)
        })
    }

    componentWillUnmount() {
        pubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isLoading, isFirst, err} = this.state

        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，请输入关键字</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    err ? err :
                    users.length === 0 ? <h2>没有搜索到任何用户</h2> :
                    users.map((user, index) => (
                    <Item key={index} user={user}/>
                    ))
                }
            </div>
        )
    };
}

export default List;