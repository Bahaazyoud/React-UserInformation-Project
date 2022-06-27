import React,{ useState } from 'react';
import AddUser from './component/AddUser/AddUser';
import UserList from './component/AddUser/UserList';
import './App.css';

function App(props) {
  const [userList,addUserlist] = useState([]);
  const AddUserHandler = (uName,uAge) => {
    addUserlist(prevUserList => {
      return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={AddUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
