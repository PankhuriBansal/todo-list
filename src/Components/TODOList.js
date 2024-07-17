import React from 'react'
import Item from './Item'

const TODOList = ({ todos,setTodos }) => {
  return (
    <ol className='todo_list'>
      {
        todos && todos?.length > 0 ? (
          todos?.map((item, index) => <Item item={item} key={index} setTodos={setTodos}/>)) :
          (<p>Seems lonely in here, what are you up to?</p>)

      }
    </ol>
  )
}

export default TODOList