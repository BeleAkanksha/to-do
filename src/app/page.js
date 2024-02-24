'use client'
import React, {useState} from "react";

const App = () =>{
  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);

  const updateInput = (value) =>{
    setUserInput(value);
  };

  const addItem = () =>{
    if(userInput!=='') {
      const UserInputItem = {
        id: Math.random(),
        value: userInput,
      };

      setList([...list,UserInputItem]);

      setUserInput('');
    }
  };

  const deleteItem = (key) => { 
        const updatedList =  
              list.filter((item) => item.id !== key); 
        setList(updatedList); 
    }; 
  

  const editItem = (index)=> {
    const editedTodo = prompt('Edit the todo:');
    if(editedTodo!== null && editedTodo.trim()!==null){
      const updatedTodos = [...list];
      updatedTodos[index].value = editedTodo;
      setList(updatedTodos);
    }
  };
  return ( 
  <div 
              style={{ 
                  fontFamily: 'Arial, sans-serif', 
                  maxWidth: '600px', 
                  margin: '0 auto', 
                  padding: '20px', 
              }} 
          > 
              <div 
                  style={{ 
                      textAlign: 'center', 
                      fontSize: '2.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '20px', 
                      color: 'rgb(151,76,175)',
                  }} 
              > 
                TODO LIST
              </div> 
              {/* <div 
                  style={{ 
                      textAlign: 'center', 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '20px', 
                  }} 
              > 
                  TODO LIST 
              </div>  */}
              <div 
                  style={{ display: 'flex',  
                          alignItems: 'center',  
                          marginBottom: '20px' }} 
              > 
                  <input 
                      style={{ 
                          fontSize: '1.2rem', 
                          padding: '10px', 
                          marginRight: '10px', 
                          flexGrow: '1', 
                          borderRadius: '4px', 
                          border: '1px solid rgb(151,76,175)', 
                      }} 
                      placeholder="Add item..."
                      value={userInput} 
                      onChange={(item) =>  
                              updateInput(item.target.value)} 
                  /> 
                  <button 
                      style={{ 
                          fontSize: '1.2rem', 
                          padding: '10px 20px', 
                          backgroundColor: 'rgb(151,76,175)', 
                          color: 'white', 
                          border: 'none', 
                          borderRadius: '8px', 
                          cursor: 'pointer', 
                      }} 
                      onClick={addItem} 
                  > 
                      ADD 
                  </button> 
              </div> 
              <div 
                  style={{ background: '#f9f9f9',  
                          padding: '20px',  
                          borderRadius: '8px' }} 
              > 
                  {list.length > 0 ? ( 
                      list.map((item, index) => ( 
                          <div 
                              key={index} 
                              style={{ 
                                  display: 'flex', 
                                  justifyContent: 'space-between', 
                                  alignItems: 'center', 
                                  marginBottom: '10px', 
                              }} 
                          > 
                              <span style={{ fontSize: '1.2rem',  
                                            flexGrow: '1' }}> 
                                  {item.value} 
                              </span> 
                              <span> 
                                  <button 
                                      style={{ 
                                          padding: '10px', 
                                          backgroundColor: '#f44336', 
                                          color: 'white', 
                                          border: 'none', 
                                          borderRadius: '8px', 
                                          marginRight: '10px', 
                                          cursor: 'pointer', 
                                      }} 
                                      onClick={() => deleteItem(item.id)} 
                                  > 
                                      Delete 
                                  </button> 
                                  <button 
                                      style={{ 
                                          padding: '10px', 
                                          backgroundColor: '#2196f3', 
                                          color: 'white', 
                                          border: 'none', 
                                          borderRadius: '8px', 
                                          cursor: 'pointer', 
                                      }} 
                                      onClick={() => editItem(index)} 
                                  > 
                                      Edit 
                                  </button> 
                              </span> 
                          </div> 
                      )) 
                  ) : ( 
                      <div 
                          style={{ textAlign: 'center',  
                                  fontSize: '1.2rem',  
                                  color: '#777' }} 
                      > 
                          No items in the list 
                      </div> 
                  )} 
              </div> 
          </div> 
      ); 
}; 

export default App;