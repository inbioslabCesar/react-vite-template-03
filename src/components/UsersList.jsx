import { useState } from 'react';
import style from './UsersList.module.css';
import UsersListFilters from './usersListFilters';
import UsersListRows from './UsersListRows';

const UsersList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();
	const { users } = useUsers(initialUsers);

	let usersFiltered = filterUsersByName(users, search);
	usersFiltered = filterActiveUsers(usersFiltered, onlyActive);
	usersFiltered = sortUsers(usersFiltered, sortBy);
	return (
		<div className={style.wrapper}>
			<h1>Listado de usuarios</h1>
			<UsersListFilters
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFiltersFunctions}
			/>
			<UsersListRows users={usersFiltered} />
		</div>
	);
};
const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});

	const setSearch = search =>
		setFilters({
			...filters,
			search
		});
	const setOnlyActive = onlyActive =>
		setFilters({
			...filters,
			onlyActive
		});
	const setSortBy = sortBy =>
		setFilters({
			...filters,
			sortBy
		});

	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	};
};
const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers);

	return { users };
};
const filterUsersByName = (users, search) => {
	if (!search) return [...users];
	const normalizeSearch = search.toLowerCase();
	return users.filter(user =>
		user.name.toLowerCase().startsWith(normalizeSearch)
	);
};
const filterActiveUsers = (users, active) => {
	if (!active) return [...users];
	return users.filter(user => user.active);
};
const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		default:
			return sortedUsers;
	}
};

export default UsersList;
