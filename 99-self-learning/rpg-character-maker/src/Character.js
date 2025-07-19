import React, { useState } from 'react';

function Character() {
  const [name, setName] = useState('');
  const [characterClass, setCharacterClass] = useState('warrior');

  function handleNameChange(event) {
    setName(event.target.value);
    console.log(`Character name changed to: ${name}`);
    console.log(`Character class is: ${characterClass}`);
  }

  return (
    <div>
      <h2>Character Maker</h2>
      <form onSubmit={handleNameChange}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Class:
          <select name="class" value={characterClass} onChange={e => setCharacterClass(e.target.value)  }>
            <option value="warrior">Warrior</option>
            <option value="mage">Mage</option>
            <option value="rogue">Rogue</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
}

export default Character;