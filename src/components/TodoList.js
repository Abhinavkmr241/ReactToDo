import React from 'react'
import './TodoList.css'

function TodoList(props) {
    const items = props.items
    const listItems = items.map(item => {
            if (item.mark === 'active') {
                return <div className = 'list' key = {item.key}>
                <div>
                    <input type = 'checkbox' id = 'markComlete' onClick = {
                    (e) => {props.markComplete(item.key)}
                    } />
                    <input type = "text" id = {item.key} value = {item.text}
                    onChange = {
                        (e) => {props.setUpdate(e.target.value, item.key)}
                    }/>
                    <button onClick = {() => props.deleteItem(item.key)}>X</button>
                </div>
            </div>
            } else {
                return <div className = 'Checkedlist' key = {item.key}>
                    <div>
                        {item.text}
                        <button onClick = {() => props.deleteItem(item.key)}>Delete</button>
                    </div>
                </div>
            }
    })
    return (
    <div>{listItems}</div>
    )
}

export default TodoList