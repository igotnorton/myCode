import React, {useState} from 'react';

const UserInput = ({newItem}) => {
  const [userText, setUserText] = useState('');

  const handleUpdate = (event) => {
    setUserText(event.currentTarget.value);
  }

  const handleConfirm = (event) => {
    event.preventDefault();
    newItem(userText);
    setUserText("");
  }

  return (
    <form onSubmit={handleConfirm} >
      <input className="UserInput" onChange={handleUpdate} value={userText} type="text" placeholder="Type here..." ></input>
      <button>Confirm</button>
    </form>
  );
}

export default UserInput;