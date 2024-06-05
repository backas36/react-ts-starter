import style from "./App.module.scss";

function App() {
    return (
        <div>
            <h1 className={style.h1}>Hello world!</h1>
            <div className='flex flex-col'>
                <a
                    href='/debounce-throttle'
                    className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'
                >
                    Debounce & Throttle
                </a>
                <a href='/flexbox-01' className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'>
                    Flexbox01
                </a>
                <a
                    href='/flexbox-item-grow'
                    className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'
                >
                    Flexbox Item Grow
                </a>
                <a
                    href='/flexbox-item-shrink'
                    className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'
                >
                    Flexbox Item Shrink
                </a>
                <a href='/flexbox-rule' className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'>
                    Flexbox Rule
                </a>
                <a href='/image-lazy' className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'>
                    Image Lazy Loading 01
                </a>
                <a
                    href='/rwd-flexbox-card'
                    className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'
                >
                    RWD Flexbox Card
                </a>
                <a href='/img-ratio' className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'>
                    Image Ratio
                </a>
                <a href='/card-image' className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'>
                    Card Image
                </a>
            </div>
        </div>
    );
}

export default App;
