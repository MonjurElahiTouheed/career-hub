
const Button = ({children, className}) => {
    return (
        <button className={`bg-linear-to-r from-gradinet-from to-gradinet-to font-primary font-extrabold text-xl text-white ${className}`}>
            {children}
        </button>
    );
};

export default Button;