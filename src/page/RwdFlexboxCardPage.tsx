import styles from "./RwdFlexboxCardPage.module.scss";

interface IItemCard {
    imgSize: {
        width: number;
        height: number;
        id: number;
    };
    title: string;
    description: string;
}
const ItemCard = ({ imgSize, title, description }: IItemCard) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgBox}>
                <img
                    src={`https://picsum.photos/id/${imgSize.id}/${imgSize.width}/${imgSize.height}`}
                    alt=''
                    loading='lazy'
                />
            </div>
            <div className={styles.body}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
};

const RwdFlexboxCardPage = () => {
    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <ItemCard
                    imgSize={{ width: 600, height: 800, id: 500 }}
                    title='Title 01'
                    description='tincidunt nunc, a lacinia orci nisl a nunc'
                />
                <ItemCard
                    imgSize={{ width: 500, height: 600, id: 100 }}
                    title='Title 02'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi id aliquam tincidunt, justo nunc tincidunt nunc, a lacinia orci nisl a nunc. Sed non nunc id nunc tincidunt tincidunt.'
                />
                <ItemCard
                    imgSize={{ width: 800, height: 1200, id: 200 }}
                    title='Title 03'
                    description='adipiscing elit. Sed euismod, nisi id aliquam tincidunt, justo nunc tincidunt nunc, a lacinia'
                />
                <ItemCard
                    imgSize={{ width: 500, height: 450, id: 310 }}
                    title='Title 04'
                    description='auctor, nisl id tincidunt lacinia, nunc nunc'
                />
                <ItemCard
                    imgSize={{ width: 500, height: 700, id: 400 }}
                    title='Title 05'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi id aliquam tincidunt, justo nunc tincidunt nunc, a lacinia orci nisl a nunc. Sed non nunc id nunc tincidunt tincidunt. Sed auctor, nisl id tincidunt lacinia, nunc nunc lacinia nunc, id aliquam nunc nisl id nunc. Sed euismod, nisi id aliquam tincidunt, justo nunc tincidunt nunc, a lacinia orci nisl a nunc.'
                />
                <ItemCard
                    imgSize={{ width: 600, height: 800, id: 500 }}
                    title='Title 01'
                    description='tincidunt nunc, a lacinia orci nisl a nunc'
                />
                <ItemCard
                    imgSize={{ width: 500, height: 600, id: 100 }}
                    title='Title 02'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi id aliquam tincidunt, justo nunc tincidunt nunc, a lacinia orci nisl a nunc. Sed non nunc id nunc tincidunt tincidunt.'
                />
                <ItemCard
                    imgSize={{ width: 800, height: 1200, id: 200 }}
                    title='Title 03'
                    description='adipiscing elit. Sed euismod, nisi id aliquam tincidunt, justo nunc tincidunt nunc, a lacinia'
                />
                <ItemCard
                    imgSize={{ width: 500, height: 450, id: 320 }}
                    title='Title 04'
                    description='auctor, nisl id tincidunt lacinia, nunc nunc'
                />
                <ItemCard
                    imgSize={{ width: 500, height: 700, id: 400 }}
                    title='Title 05'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi id aliquam tincidunt, justo nunc tincidunt nunc, a lacinia orci nisl a nunc. Sed non nunc id nunc tincidunt tincidunt. Sed auctor, nisl id tincidunt lacinia, nunc nunc lacinia nunc, id aliquam nunc nisl id nunc. Sed euismod, nisi id aliquam tincidunt, justo nunc tincidunt nunc, a lacinia orci nisl a nunc.'
                />
            </div>
        </div>
    );
};
export default RwdFlexboxCardPage;
