const Button = ({ type, onClick, customClass, value }) => {
    return (<>

        <button
            key={Math.random()}
            type={type}
            onClick={onClick}
            className={customClass}>{value}</button>
    </>)
}
export default Button