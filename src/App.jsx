import UsersList from "./components/UsersList";

const USERS = [
    {
        id: 0,
        name: 'Cesar Perez',
        active: true,
        role: 'teacher'
    },
    {
        id: 1,
        name: 'Andder Perez',
        active: true,
        role: 'student'
    },
    {
        id: 2,
        name: 'Leonardo Perez',
        active: false,
        role: 'student'
    }
]

const App = () => (
	<UsersList initialUsers={USERS} />
				
	
);

export default App;