import Item from "./Item";

const List = (props) => {

    console.log(props)
    const {users, isLoading, isFirst, err} = props.users
    return (
        <div className="row">
            {
                isFirst ? <h2>欢迎使用，请输入关键字</h2> :
                isLoading ? <h2>Loading...</h2> :
                err ? err :
                users.length===0?<h2>没有搜索到任何用户</h2>:
                users.map((user, index) => (
                    <Item key={index} user={user}/>
                ))
            }
        </div>
    );
}

export default List;