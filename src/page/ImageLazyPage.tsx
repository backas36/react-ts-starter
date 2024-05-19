import { useEffect } from "react";

import styles from "./ImageLazyPage.module.scss";

const ImageLazyPage = () => {
    useEffect(() => {
        const blurDivs = document.querySelectorAll(`.${styles.blurLoad}`);
        blurDivs.forEach((div) => {
            const img = div.querySelector("img");
            function loaded() {
                div?.classList.add(styles.loaded);
            }
            if (img?.complete) {
                loaded();
            } else {
                img?.addEventListener("load", loaded);
            }
        });
    }, []);
    return (
        <div className={styles.grid}>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/500/60/80)" }}>
                <img src='https://picsum.photos/id/500/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/501/60/80)" }}>
                <img src='https://picsum.photos/id/501/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/502/60/80)" }}>
                <img src='https://picsum.photos/id/502/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/503/60/80)" }}>
                <img src='https://picsum.photos/id/503/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/504/60/80)" }}>
                <img src='https://picsum.photos/id/504/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/505/60/80)" }}>
                <img src='https://picsum.photos/id/505/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/506/60/80)" }}>
                <img src='https://picsum.photos/id/506/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/507/60/80)" }}>
                <img src='https://picsum.photos/id/507/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/508/60/80)" }}>
                <img src='https://picsum.photos/id/508/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/509/60/80)" }}>
                <img src='https://picsum.photos/id/509/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/510/60/80)" }}>
                <img src='https://picsum.photos/id/510/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/511/60/80)" }}>
                <img src='https://picsum.photos/id/511/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/512/60/80)" }}>
                <img src='https://picsum.photos/id/512/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/513/60/80)" }}>
                <img src='https://picsum.photos/id/513/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/514/60/80)" }}>
                <img src='https://picsum.photos/id/514/600/800' alt='' loading='lazy' />
            </div>
            <div className={styles.blurLoad} style={{ backgroundImage: "url(https://picsum.photos/id/515/60/80)" }}>
                <img src='https://picsum.photos/id/515/600/800' alt='' loading='lazy' />
            </div>
        </div>
    );
};
export default ImageLazyPage;
