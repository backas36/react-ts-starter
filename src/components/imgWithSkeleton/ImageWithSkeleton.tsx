import clsx from "clsx";
import { useEffect, useState } from "react";

interface IProps {
    src: string;
    alt: string;
    classes?: string;
}
const ImageWithSkeleton = ({ src, alt, classes }: IProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState(src);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsError(true);
        };
    }, [src]);

    if (isError) {
        return (
            <div className='flex h-full w-full items-center justify-center rounded-md bg-red-100 font-semibold text-red-500'>
                error
            </div>
        );
    }

    if (isLoading) {
        return <div className='h-full w-full animate-pulse bg-gray-200'></div>;
    }

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={clsx(
                "block h-full w-full animate-[pulse_1s_ease-in_1] bg-gray-200 object-cover object-center",
                classes
            )}
            loading='lazy'
        />
    );
};
export default ImageWithSkeleton;
