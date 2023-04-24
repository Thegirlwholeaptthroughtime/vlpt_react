import React from 'react';

function User({ user,onRemove }) {
    return (
        <div>
            <b>ID : {user.username}</b>
            <div>Email :<span>{user.email}</span></div>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            <span>----------------------</span>

        </div>
    )
}


function UserList({users,onRemove}) {

 
    return (
        <div>
            {users.map(user => (
                <User key={user.id} user={user} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default UserList;