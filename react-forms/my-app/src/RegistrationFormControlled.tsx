import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [bbq, setBbq] = useState('');
  const [chicken, setChicken] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('bbq:', bbq);
    console.log('chicken:', chicken);
  }

  return (
    <>
      <p>Controlled</p>
      <form onSubmit={handleSubmit}>
        <label>
          bbq<input name="bbq" onChange={(e) => setBbq(e.target.value)}></input>
        </label>
        <label>
          chicken
          <input
            name="chicken"
            onChange={(e) => setChicken(e.target.value)}></input>
        </label>
        <button>pizza</button>
      </form>
    </>
  );
}
