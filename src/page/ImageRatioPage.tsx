import { HeartFilledIcon } from "@radix-ui/react-icons";

import styles from "./ImageRatioPage.module.scss";

const ImageRatioPage = () => {
    return (
        <div>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img src='https://picsum.photos/id/548/600/400' alt='' />
                </div>
                <HeartFilledIcon width={56} height={56} color='blue' className={styles.icon} />
            </div>
            <div className={styles.box2}>
                <div className={styles.avatarImg}></div>
                <HeartFilledIcon width={56} height={56} color='blue' className={styles.icon2} />
            </div>
        </div>
    );
};
export default ImageRatioPage;
