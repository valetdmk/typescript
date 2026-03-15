interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  website: string;
  company: {
    // ...
  };
}

async function fetchUser(userId: number): Promise<User | null> {

  try {
    const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const userData: User = await response.json();

    console.log(`Город пользователя: ${userData.address.city}`);

    return userData;

  } catch (error) {
    console.error('Не удалось загрузить пользователя:', error);
    return null;
  }
}

async function fetchUsers(city?: string): Promise<User[]> {
    try {
        const  response: Response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const users: User[] = await response.json();

        return city ? users.filter((user) => user.address.city === city) : users;
    } catch (error) {
        console.error('Не удалось загрузить пользователей:', error);
        throw error;
    }
}

async function testFunctions() {
    const user = await fetchUser(1);
    console.log(user);

    const allUsers = await fetchUsers();
    console.log(allUsers);

    const ekaterinburgUsers = await fetchUsers('Ekaterinburg');
    console.log(ekaterinburgUsers);
}

testFunctions();