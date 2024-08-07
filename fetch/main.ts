interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const users = (await response.json()) as User[];
    console.log(users);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
fetchUsers();

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchPokemon(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const pokemon = (await response.json()) as Pokemon;
    console.log(pokemon);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
fetchPokemon();
