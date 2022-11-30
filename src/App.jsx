import UsersList from "./components/UsersList";

const USERS = [
    {
        username: 'Cesar',
        name: 'César Pérez',
        active: true,
        role: 'teacher'
    },
    {
        username: 'Andder',
        name: 'Andder Pérez',
        active: true,
        role: 'student'
    },
    {
        username: 'Leonardo',
        name: 'Leonardo Pérez',
        active: false,
        role: 'student'
    }
]

const App = () => (
	<UsersList initialUsers={USERS} />
				
	
);

export default App;