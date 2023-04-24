import React, { useRef, useState } from 'react';

function InputSample(props) {



    
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })

    const nameInput = useRef();

    const { name, nickname } = inputs;
    const onChange = (e) => {
        const { value, name } = e.target; //새로운 객체를 만든다
        console.log(name)
        console.log(value)
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus();
    }

    return (
        <div>
            <h1>input관리</h1>
            <input
                name='name'
                placeholder='이름'
                onChange={onChange}
                value={name}
               
            />
            <input
                name='nickname'
                placeholder='닉네임'
                onChange={onChange}
                value={nickname}
                ref={nameInput}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :</b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;