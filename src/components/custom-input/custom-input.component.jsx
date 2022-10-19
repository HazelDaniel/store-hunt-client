export const CustomInput = (props) => {
	const { label, name, type, id, placeholder, $variant } = props;
	return (
		<>
			<label for={id}>{label}</label>
			<input type={type} name={name || ""} id={id} placeholder={placeholder} className={$variant} />
		</>
	);
};
