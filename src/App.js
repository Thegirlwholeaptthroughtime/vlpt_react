import { useMemo, useRef, useState } from "react";
import Counter from "./Counter";
import Hello from "./Hello";
import InputSample from "./InputSample";
import UserList from "./UserList";
import Wrapper from "./Wrapper";
import CreateUser from "./CreateUser";


function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중....')
  return users.filter(user => user.active).length;
}


function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState (
    [
      {
        id: 1,
        username: "velopert",
        email: "public.velopert@gmail.com",
        active: true,
      },
      {
        id: 2,
        username: "tester",
        email: "tester@example.com",
        active: false,
      },
      {
        id: 3,
        username: "liz",
        email: "liz@example.com",
        active: false,
      },
    ]
  )

  const nextId = useRef(4);

  
  const onCreate = () => {

    const user = {
      id : nextId.current,
      username,
      email
    }
    setUsers([...users, user])

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

 const onToggle = id => {
  setUsers(
    users.map(user => 
        user.id === id ? {...user, active : !user.active} : user
      )
  )  
}

/* const count = countActiveUsers(users) */
 const count = useMemo(() => countActiveUsers(users), [users]) 
//memo : memorized 를 의미함. 이는 이전에 계산한값을 재사용한다는 의미..
  return (
    <Wrapper>
      {/*  <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="blue" />
      <Hello name="react4" color="pink" />
      <Hello name="react5" color="orange" isSpecial={true}/>
      <Hello name="react6" color="grey" isSpecial={true}/>
      <Counter />


      <InputSample /> */}
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users} 
        onRemove={onRemove} 
        onToggle={onToggle}  
      />
      <div>활성사용자 수 : {count}</div>
      {/* <InputSample /> */}
    </Wrapper>
  );
}

export default App;
