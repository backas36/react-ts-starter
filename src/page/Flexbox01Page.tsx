import { useEffect, useState } from "react";

import styles from "./Flexbox01Page.module.scss";

const Flexbox01Page = () => {
    const [itemO1, setItem01] = useState<number>(0);

    useEffect(() => {
        if (window.document.querySelector("#item01")?.clientWidth) {
            setItem01(window.document.querySelector("#item01")?.clientWidth || 0);
        }
    }, []);
    return (
        <div className='my-10'>
            <h1 className={styles.h1}>flex, 預設不換行，container 空間不足時，就會縮小 item width</h1>
            <div className={styles.container}>
                <div id='item01' className={styles.item}>
                    {itemO1}
                </div>
                <div className={styles.item}>{itemO1}</div>
                <div className={styles.item}>{itemO1}</div>
            </div>
            <h1 className={styles.h1}>flex, wrap</h1>
            <div className={`${styles.container} ${styles.wrap}`}>
                <div className={styles.item}>200px</div>
                <div className={styles.item}>200px</div>
                <div className={styles.item}>200px</div>
            </div>
            <h1 className={styles.h1}>flex, justify-content between</h1>
            <p>空白空間分配在 item 彼此之間</p>
            <div className={`${styles.container02} justify-between`}>
                <div className={styles.item}>200px</div>
                <div className={styles.item}>200px</div>
                <div className={styles.item}>200px</div>
            </div>
            <h1 className={styles.h1}>flex, justify-content around</h1>
            <p>item 與 container 的間隔，是 item 與 item 間隔的一半</p>
            <div className={`${styles.container02} justify-around`}>
                <div className={styles.item}>200px</div>
                <div className={styles.item}>200px</div>
                <div className={styles.item}>200px</div>
            </div>
            <h1 className={styles.h1}>flex, justify-content evenly</h1>
            <p>空白空間均勻分配，間隔會相同</p>
            <div className={`${styles.container02} justify-evenly`}>
                <div className={styles.item}>200px</div>
                <div className={styles.item}>200px</div>
                <div className={styles.item}>200px</div>
            </div>
            <h1 className={styles.h1}>flex, align-items default (stretch)</h1>
            <p>item 沒有設定 height, 就會拉伸到跟 container 一樣高</p>
            <div className={`${styles.container03}`}>
                <div className={`${styles.item02}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, excepturi.
                </div>
                <div className={`${styles.item02}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, excepturi. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quis velit ducimus quo voluptatem animi itaque adipisci voluptatibus
                    esse a voluptas.
                </div>
                <div className={`${styles.item02}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, excepturi.
                </div>
            </div>
            <h1 className={styles.h1}>flex, align-items (center)</h1>
            <div className={`${styles.container03} items-center`}>
                <div className={`${styles.item02}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, excepturi.
                </div>
                <div className={`${styles.item02}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, excepturi. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quis velit ducimus quo voluptatem animi itaque adipisci voluptatibus
                    esse a voluptas.
                </div>
                <div className={`${styles.item02}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, excepturi.
                </div>
            </div>
            <h1 className={styles.h1}>flex, align-items (baseline)</h1>
            <div className={`${styles.container03} items-baseline`}>
                <div className={`${styles.item02}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, excepturi.
                </div>
                <div className={`${styles.item02}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, excepturi. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quis velit ducimus quo voluptatem animi itaque adipisci voluptatibus
                    esse a voluptas.
                </div>
                <div className={`${styles.item02}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, excepturi.
                </div>
            </div>
        </div>
    );
};
export default Flexbox01Page;
