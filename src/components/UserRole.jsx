import style from './userRole.module.css';

const ROLE_STYLES = {
	teacher: ['profesor', style.teacher],
	student: ['alumno', style.student],
	other: ['otros', style.other]
};
const UserRole = ({ role }) => {
	const [roleName, roleClassname] = ROLE_STYLES[role] || ROLE_STYLES.other;
	return <span className={ `${ style.role } ${ roleClassname }`}>{roleName}</span>;
};

export default UserRole;
