import { ChangeEvent, useState } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';
import './Password.css';

export function Password() {
  const [password, setPassword] = useState('');
  const [times, setTimes] = useState('show');
  const [check, setCheck] = useState('hidden');
  const [required, setRequired] = useState('show');
  const [requiredText, setRequiredText] = useState('A password is required.');

  function handleType(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);

    if (e.target.value === '') {
      setTimes('show');
      setCheck('hidden');
      setRequired('show');
      setRequiredText('A password is required.');
    } else if (e.target.value.length < 8) {
      setTimes('show');
      setCheck('hidden');
      setRequired('show');
      setRequiredText('Your password is too short.');
    } else {
      setTimes('hidden');
      setCheck('show');
      setRequired('hidden');
      setRequiredText('Pizza!');
    }
  }

  return (
    <>
      <label>
        Password
        <input value={password} onChange={(e) => handleType(e)} />
        <FaTimes id="times" className={times}></FaTimes>
        <FaCheck id="check" className={check}></FaCheck>
      </label>
      <p id="required" className={required}>
        {requiredText}
      </p>
    </>
  );
}
