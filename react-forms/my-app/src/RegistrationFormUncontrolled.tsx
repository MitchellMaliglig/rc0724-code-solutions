import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data));
  }

  return (
    <>
      <p>Uncontrolled</p>
      <form onSubmit={handleSubmit}>
        <label>
          bbq<input name="bbq"></input>
        </label>
        <label>
          chicken<input name="chicken"></input>
        </label>
        <button>pizza</button>
      </form>
    </>
  );
}
