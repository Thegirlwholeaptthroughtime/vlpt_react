import React from 'react';

function Hello(props) {
    return (
        <div style={{
            color : props.color
        }}>
            {props.isSpecial ? <b>*</b> : <b>@</b>}
            안녕하세열{props.name}
        </div>
    );
}

Hello.defaultProps = {
    name : 'no name'
}

export default Hello;