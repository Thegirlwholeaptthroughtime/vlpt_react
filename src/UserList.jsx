import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {


    /*   
    useEffect(() => {
        console.log('user값이 설정됨')
        console.log(user)
        return () => {
            console.log('user가 바뀌기 전..')
            console.log(user)
        }
    }, [user]);

    마운트 : 처음 나타남
    언마운트 : 사라짐
    useEffect : 함수 
    첫번째인자는 함수 / 두번째 인자는 배열(Deps라 명칭)
    */
  

    useEffect(() => {
        //console.log(user);
    })
    // 컴포넌트가 리렌더링 될때마다
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                ID : {user.username}</b>
            <div>Email :<span>{user.email}</span></div>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            <span>----------------------</span>

        </div>
    )
}


function UserList({ users, onRemove, onToggle }) {


    return (
        <div>
            {users.map(user => (
                <User
                    key={user.id}
                    user={user}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserList;