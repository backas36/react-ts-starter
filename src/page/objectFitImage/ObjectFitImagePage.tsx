import styles from "./ObjectFitImagePage.module.scss";

const ObjectFitImagePage = () => {
    return (
        <main>
            <div className={styles.header}>
                <h1 className={styles.bannerTitle}>Banner Image Title, Banner Image Title</h1>
                <img src='https://picsum.photos/id/479/2000/800' alt='banner' className={styles.bannerImg} />
            </div>
        </main>
    );
};
export default ObjectFitImagePage;
