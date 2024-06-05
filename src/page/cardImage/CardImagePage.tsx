import styles from "./CardImagePage.module.scss";

const CardImagePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card1}>
                <div className={styles.cardImage}>
                    <img src={"https://picsum.photos/id/684/600/600"} alt={"img"} />
                </div>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Card Img 1:1</h2>
                    <p className={styles.cardText}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, veniam.
                    </p>
                </div>
            </div>
            <div className={styles.card1}>
                <div className={styles.cardImage}>
                    <img src={"https://picsum.photos/id/684/600/800"} alt={"img"} />
                </div>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Card Img 1:1</h2>
                    <p className={styles.cardText}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, veniam.
                    </p>
                </div>
            </div>
            <div className={styles.card1}>
                <div className={styles.cardImage}>
                    <img src={"https://picsum.photos/id/684/800/300"} alt={"img"} />
                </div>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Card Img 1:1</h2>
                    <p className={styles.cardText}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, veniam.
                    </p>
                </div>
            </div>
            <div className={styles.card32}>
                <div className={styles.cardImage}>
                    <img src={"https://picsum.photos/id/681/800/800"} alt={"img"} />
                </div>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Card Img 3:2</h2>
                    <p className={styles.cardText}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, veniam.
                    </p>
                </div>
            </div>
            <div className={styles.card32AR}>
                <div className={styles.cardImage}>
                    <img src={"https://picsum.photos/id/681/800/800"} alt={"img"} />
                </div>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Card Img 3:2</h2>
                    <p className={styles.cardText}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, veniam.
                    </p>
                </div>
            </div>
            <div className={styles.card169}>
                <div className={styles.cardImage}>
                    <img src={"https://picsum.photos/id/682/900/900"} alt={"img"} />
                </div>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Card Img 16:9</h2>
                    <p className={styles.cardText}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, veniam.
                    </p>
                </div>
            </div>
            <div className={styles.cardAspectRatio}>
                <div className={styles.cardImage}>
                    <img src={"https://picsum.photos/id/682/1600/900"} alt={"img"} />
                </div>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Card Img 16:9</h2>
                    <p className={styles.cardText}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, veniam.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default CardImagePage;
