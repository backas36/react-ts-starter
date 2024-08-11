import styles from "./ObjectFitImagePage.module.scss";

const ObjectFitImagePage = () => {
    return (
        <main>
            <div className={styles.header}>
                <h1 className={styles.bannerTitle}>Banner Image Title, Banner Image Title</h1>
                <img src='https://picsum.photos/id/479/2000/800' alt='banner' className={styles.bannerImg} />
            </div>

            <h2 className='mt-16'>Responsive image</h2>
            <div className={styles.imgBox}>
                <img src='https://picsum.photos/id/124/1200/800' alt='' />
            </div>
        </main>
    );
};
export default ObjectFitImagePage;
