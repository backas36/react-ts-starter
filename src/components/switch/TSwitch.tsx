interface IProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}
const TSwitch = ({ label, checked, onChange }: IProps) => {
    return (
        <label className='flex cursor-pointer items-center'>
            <div className='relative'>
                <input type='checkbox' className='sr-only' checked={checked} onChange={onChange} />
                <div
                    className={`h-6 w-10 rounded-full bg-gray-200 shadow-inner transition-colors duration-300 ease-in-out ${checked ? "bg-green-400" : ""}`}
                ></div>
                <div
                    className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 ease-in-out ${checked ? "translate-x-full transform" : ""}`}
                ></div>
            </div>
            {label && <span className='ml-3 text-gray-700'>{label}</span>}
        </label>
    );
};
export default TSwitch;
