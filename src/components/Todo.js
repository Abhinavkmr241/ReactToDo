import React, { Component } from 'react'
import TodoList from './TodoList'
import './Todo.css'

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            items : [],
            filteredItems :[],
            flag : true,
            currentItem : {
                text : '',
                key : '',
                mark : ''
            }
        }
        this.handleInput = this.handleInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.setUpdate = this.setUpdate.bind(this)
        this.markComplete = this.markComplete.bind(this)
        this.markAllComplete = this.markAllComplete.bind(this)
        this.displayAll = this.displayAll.bind(this)
        this.displayMarked = this.displayMarked.bind(this)
        this.displayActive = this.displayActive.bind(this)
    }

    handleInput(e) {
        this.setState({
            currentItem : {
                text : e.target.value,
                key : Date.now(),
                mark : 'active'
            }
        })
    }

    addItem(e) {
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem.text.trim() !== "") {
            const newItems = [...this.state.items, newItem]
            this.setState({
                items : newItems,
                currentItem : {
                    text : '',
                    key : '',
                    mark : ''
                }
            })
        }
    }

    setUpdate(val, key) {
        const items = this.state.items
        items.map(item => {
            if (item.key === key) {
                if (val !== "") {
                    item.text = val
                }
            }
        })
        this.setState({
            items : items
        })
    }

    deleteItem(key) {
        const items = this.state.items.filter(item => item.key !== key)
        const filteredItems = this.state.filteredItems.filter(item => item.key !== key)
        this.setState({
            items : items,
            filteredItems : filteredItems
        })
    }

    markComplete(key) {
        const items = this.state.items
        items.map(item => {
            if (item.key === key) {
                item.mark = 'completed'
            }
        })
        this.setState({
            items : items
        })
    }

    markAllComplete() {
        const cb = document.getElementById('markCheck')
        const items = this.state.items
        if (cb.checked) {
            items.map(item => {
                item.mark = 'completed'
            })
        } else {
            items.map(item => {
                item.mark = 'active'
            })
        }
        this.setState({
            items : items
        })
    }

    displayAll() {
        const filteredItems = this.state.items.filter(item => item.key !== null)
        this.setState({
            items : filteredItems,
            flag : true
        })
    }

    displayActive() {
        const filteredItems = this.state.items.filter(item => item.mark === 'active')
        this.setState({
            filteredItems : filteredItems,
            flag : false
        })
    }

    displayMarked() {
        const filteredItems = this.state.items.filter(item => item.mark === 'completed')
        this.setState({
            filteredItems : filteredItems,
            flag : false
        })
    }

    render() {
        return (
            <div>
                <form id = "todo-form" onSubmit = {this.addItem}>
                    <input type = "text" className = "inputToDo" placeholder= "What you want to do...?"
                        value = {this.state.currentItem.text}
                        onChange = {this.handleInput}>
                    </input>
                    <button type = "submit">Add</button>
                </form>
                <div id = "functionBox">
                    <div>
                        <input type= "checkbox" id = "markCheck" onClick = {this.markAllComplete}/>
                        <label>Mark all</label>
                    </div>
                    <div>
                        <button className = "all" onClick = {this.displayAll}>All</button>
                    </div>
                    <div>
                        <button className = "active" onClick = {this.displayActive}>Active</button>
                    </div>
                    <div>
                        <button className = "complete" onClick = {this.displayMarked}>Complete</button>
                    </div>
                </div>
                <TodoList items = {this.state.flag ? this.state.items : this.state.filteredItems}
                    deleteItem = {this.deleteItem}
                    setUpdate = {this.setUpdate}
                    markComplete = {this.markComplete}
                />
            </div>
        )
    }
}

export default Todo;