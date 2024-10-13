import { ComponentProps, forwardRef, useState } from "react";
type IProps = ComponentProps<"input"> & { label: string };
const MyInput = forwardRef<HTMLInputElement, IProps>((props, ref) => {
    const [name, setName] = useState("");
    const { label, ...otherProps } = props;
    return (
        <>
            <label htmlFor='nameInput' className='mr-2'>
                {label}
                <input
                    id='nameInput'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your name'
                    className='mr-2 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    {...otherProps}
                    ref={ref}
                />
            </label>
        </>
    );
});

export default MyInput;
