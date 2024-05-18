import clsx from "clsx";

import styles from "./FlexboxItemShrinkPage.module.scss";

const FlexboxItemShrinkPage = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl'>Flex Item, shrink 空間不足的時候該怎麼分配</h1>
            <p className='my-1 text-xl'>如果設為 0不會縮小，直接超出去 </p>
            <p className='my-1 text-xl'>預設設為 1，就縮到超出的空間1倍，數字越大，縮小比例越高 </p>
            <div className={styles.container}>
                <div className={clsx(styles.item, "shrink-0")}>flex-shrink:0, 會超過出去喔</div>

                <div className={clsx(styles.item, "shrink-0")}>flex-shrink:0</div>
                <div className={clsx(styles.item, "shrink-0")}>flex-shrink:0 超出去了吧</div>
            </div>
            <h1 className='my-2 text-2xl'>container 800px</h1>
            <p className='my-1 text-xl'>
                1. 先計算超出多少 = 全部 box 寬加總 - container 寬度 (1200px - 800px = 400px)
            </p>
            <p className='my-1 text-xl'>2. 收縮寬度 = 超出寬度 * flex-shrink/ flex-shrink加總</p>
            <p className='my-1 text-xl'>2-1. 第一個 400px * 1/6 = 66.67</p>
            <p className='my-1 text-xl'>2-2. 第二個 400px * 2/6 = 133.33</p>
            <p className='my-1 text-xl'>2-3. 第三個 400px * 3/6 = 200px</p>
            <p className='my-1 text-xl'>3. 原本的item寬度 扣掉要收縮的寬度</p>
            <div className={styles.container800}>
                <div className={clsx(styles.item400, "shrink")}>flex-shrink:1,原本 width 400px, 變成 333.33px </div>
                <div className={clsx(styles.item400, "shrink-[2]")}>flex-shrink:2,原本 width 400px, 變成 266.66px </div>
                <div className={clsx(styles.item400, "shrink-[3]")}>flex-shrink:3,原本 width 400px, 變成 200px </div>
            </div>
        </div>
    );
};
export default FlexboxItemShrinkPage;
