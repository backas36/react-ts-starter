import { ImgHTMLAttributes } from "react";

import { loadImage } from "@/utils/loadImage";

const SuspenseImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
    if (props.src === undefined) return null;
    loadImage(props.src).printStatus();
    loadImage(props.src).read();
    return <img {...props} />;
};
export default SuspenseImage;
