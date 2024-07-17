import React, { useEffect, useRef, useState } from 'react'
import DeleteBtn from "/public/delete.png"
import EditBtn from "/public/edit-button.png"
import Image from 'next/image'

const Item = ({ item, setTodos }) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef(null)
  const completeTodo = () => {
    setTodos((prevTodos) => prevTodos.map((todo) => todo.id === item.id ? {
      ...todo, is_completed: !todo.is_completed
    } : todo))
  }
  const handleEdit = () => {
    setEditing(true)
  }
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus()
      // position the cursor at the end of the text
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      )
    }
  }, [editing])
  const handleInputSubmit = (event) => {
    event.preventDefault()
    setEditing(false)
  }
  const handleInputBlur = () => {
    setEditing(false)
  }
  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => todo.id === item.id ? { title: e.target.value } : todo)
    )
  }
  const handleDeleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id))
  }
  return ( 
    <li id={item.id} className='todo_item'>
      {
        editing ? (
          <form className='edit-form' onSubmit={handleInputSubmit}>
            <label htmlFor='edit-todo'>
              <input
                ref={inputRef}
                type='text'
                name='edit-todo'
                id='edit-todo'
                defaultValue={item?.title}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
              />
            </label>
          </form>
        ) : (
          <>
            <button className='todo_items_left' onClick={completeTodo}>
              <svg fill={item.is_completed ? "#22C55E" : "#0d0d0d"}>
                <circle cx="11.998" cy="11.998" fill='nonzero' r="9.998" />
              </svg>
              <p style={item?.is_completed ? { textDecoration: "line-through" } : {}}>{item?.title}</p>
            </button>
            <div className='todo_items_right' style={{ display: "flex", gap: "10px" }}>
              <button onClick={handleEdit}>
                <span className='visually-hidden' >Edit</span>
                <Image width={50} height={50} src={EditBtn} alt='edit' />
              </button>
              <button onClick={handleDeleteTodo}>
                <span className='visually-hidden'>Delete</span>
                <Image width={50} height={50} src={DeleteBtn} alt='delete' />
              </button>
            </div>
          </>
        )
      }

    </li>
  )
}

export default Item