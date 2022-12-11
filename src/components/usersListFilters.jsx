import style from './UsersListFilters.module.css';
const UsersListFilters = ({
	search,
	onlyActive,
	sortBy,
	setSearch,
	setOnlyActive,
	setSortBy
}) => (
	<form className={style.form}>
		<input
			type='text'
			value={search}
			onChange={ev => setSearch(ev.target.value)}
		/>
		<div className={style.active}>
			<input
				type='checkbox'
				checked={onlyActive}
				onChange={ev => setOnlyActive(ev.target.checked)}
			/>
			<span>Sólo activos</span>
		</div>
		<select value={sortBy} onChange={ev => setSortBy(Number(ev.target.value))}>
			<option value={0}>Por defecto</option>
			<option value={1}>Por nombre</option>
			<option value={2}>Por rol</option>
			<option value={3}>Por activacion</option>
		</select>
	</form>
);
export default UsersListFilters;
