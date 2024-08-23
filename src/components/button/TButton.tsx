interface ITButtonProps {
    btnText: string;
}
const TButton = ({ btnText }: ITButtonProps) => {
    return (
        <button className='rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
            {btnText}
        </button>
    );
};
export default TButton;
