import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {

    wordRef = React.createRef()
    getData = () => {
        //双重解构并且重命名
        const {value:word} = this.wordRef.current;
        this.props.setUserState({isLoading: true})
        axios.get(`https://api.github.com/search/users?q=${word}`).then(
            res=>{
                console.log(res.data);
                this.props.setUserState({
                    users:res.data.items,
                    isLoading: false,
                    isFirst: false
                })
            },
            err=>{
                console.log(err)
                this.props.setUserState({err:err.message})
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