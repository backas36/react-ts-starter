import { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"video"> & ComponentProps<"source">;
const MyVideo = forwardRef<HTMLVideoElement, Props>((props, ref) => {
    const { width, src, type } = props;
    return (
        <video width={width} ref={ref}>
            <source src={src} type={type} />
        </video>
    );
});
export default MyVideo;
