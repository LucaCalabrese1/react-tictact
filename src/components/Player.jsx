import { useState } from 'react';

export default function Player({initialName, symbol}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    //setIsEditing(!isEditing); //errore, perchè latest value può variare
    setIsEditing(editing => !editing); //prevvalue => ritorna opposto
  }

  const handleChange = event => {
    setPlayerName(event.target.value); //riflette al change input il playerName nuovo nel value, 2way binding
  };

  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  let btnCaption = 'Edit';
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>;
    btnCaption = 'Save';
  }

  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
