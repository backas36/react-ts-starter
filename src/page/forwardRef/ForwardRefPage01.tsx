import { useRef } from "react";
import MyInput from "./forwardComp/MyInput";
import MyVideo from "./forwardComp/MyVideo";
const ForwardRefPage01 = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleEditClick = () => {
        if (nameRef?.current) {
            nameRef?.current.focus();
        }
    };

    const handleVideo = () => {
        if (!videoRef?.current) {
            return;
        }
        if (videoRef?.current?.paused) {
            videoRef?.current?.play();
        } else {
            videoRef?.current?.pause();
        }
    };

    return (
        <div className='p-4'>
            <div className='my-6'>
                <hr className='border-t border-gray-300' />
                <div className='-mt-3 flex items-center justify-center'>
                    <span className='bg-white px-3 text-sm text-gray-500'>Using forwardRef to control input</span>
                </div>
            </div>
            <div className='flex items-center'>
                <MyInput label={"Enter Your Name: "} ref={nameRef} />
                <button
                    className='rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    onClick={handleEditClick}
                >
                    Edit
                </button>
            </div>
            <div className='my-6'>
                <hr className='border-t border-gray-300' />
                <div className='-mt-3 flex items-center justify-center'>
                    <span className='bg-white px-3 text-sm text-gray-500'>Using forwardRef to control Video</span>
                </div>
            </div>
            <MyVideo ref={videoRef} width={500} type='video/mp4' src='https://www.w3schools.com/html/mov_bbb.mp4' />
            <button
                className='rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                onClick={handleVideo}
            >
                Play
            </button>
            <button
                className='rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                onClick={handleVideo}
            >
                Pause
            </button>
        </div>
    );
};
export default ForwardRefPage01;
