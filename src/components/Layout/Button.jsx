
const Button = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={`bg-linear-to-r from-gradinet-from to-gradinet-to hover:from-0% hover:to-0% transition duration-[5s] ease-in-out
 font-primary font-extrabold text-xl text-white ${className}`}>
            {children}
        </button>
    );
};

export default Button;