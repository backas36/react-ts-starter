import { useRef } from "react";

type CatItem = {
    id: number;
    imageUrl: string;
};

const catList: CatItem[] = [];
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: `https://picsum.photos/seed/172942680375${i}}/300/300`,
    });
}

const CatFriends = () => {
    const itemsRef = useRef<Map<number, HTMLLIElement>>(new Map());

    const setItemsRef = (catId: number) => (node: HTMLLIElement) => {
        const map = itemsRef.current;
        if (node) {
            map.set(catId, node);
            return;
        }
        map.delete(catId);
    };

    const handleClick = (catId: number) => {
        const map = itemsRef.current;
        const node = map.get(catId);
        if (node) {
            node.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    };
    return (
        <div className='mt-4 border-t-2 border-blue-400'>
            <nav>
                <button
                    type='button'
                    onClick={() => handleClick(0)}
                    className='mr-2 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                >
                    click to move to 0
                </button>
                <button
                    type='button'
                    onClick={() => handleClick(5)}
                    className='mr-2 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                >
                    click to move to 5
                </button>
                <button
                    type='button'
                    onClick={() => handleClick(9)}
                    className='mr-2 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                >
                    click to move to 9
                </button>
            </nav>
            <div>
                <ul>
                    {/* STEP 3：透過 ref attribute 呼叫 ref callback */}
                    {catList.map((cat) => (
                        <li key={cat.id} ref={setItemsRef(cat.id)}>
                            <img src={cat.imageUrl} alt={`Cat #${cat.id}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default CatFriends;
