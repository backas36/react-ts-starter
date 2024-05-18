import clsx from "clsx";

import styles from "./FlexboxItemGrowPage.module.scss";

const FlexboxItemGrowPage = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl'>Flex Item, flex-grow 剩餘空間該怎麼分配</h1>
            <p className='my-1 text-xl'>預設是0，不影響item的width, 下面是全部都改為 flex-grow:1</p>
            <div className={styles.container}>
                <div className={styles.item}>flex-grow:1</div>

                <div className={styles.item}>flex-grow:1</div>
                <div className={styles.item}>flex-grow:1</div>
            </div>
            <h1 className='my-2 text-2xl'>container 800px</h1>
            <p className='my-1 text-xl'>1. 剩餘寬度 = container width - box 寬加總(800px - 100px*2 = 600px)</p>
            <p className='my-1 text-xl'>
                2. 把剩餘寬度分配給 item1, item2 (分配寬度 = 剩餘寬度 * flex-grow/flex-grow加總)
            </p>
            <p className='my-1 text-xl'>2-1. item01: 600px * 3/(3+1) =450px </p>
            <p className='my-1 text-xl'>2-2. item01: 600px * 1/(3+1) = 150px</p>
            <p className='my-1 text-xl'>
                3. 分配到的寬度再加上原本 item 的寬度 : item01 = 450px + 100px, item02: 150px+100px
            </p>
            <div className={styles.container800}>
                <div className={clsx(styles.item100, "grow-[3]")}>flex-grow:3, 550px</div>
                <div className={clsx(styles.item100, "grow")}>flex-grow:1, 250px</div>
            </div>
        </div>
    );
};
export default FlexboxItemGrowPage;
