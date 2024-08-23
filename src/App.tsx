import style from "./App.module.scss";

function App() {
    return (
        <div>
            <h1 className={style.h1}>Hello world!</h1>
            <div className='grid grid-cols-3 gap-4'>
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
                <a href='/suspense-image' className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'>
                    Suspense Image Loading
                </a>
                <a
                    href='/object-fit-image'
                    className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'
                >
                    Object-fit Image
                </a>
                <a href='/useLayoutEffect' className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'>
                    useLayoutEffect
                </a>
                <a href='/memo' className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'>
                    memo
                </a>
                <a href='/useCallback' className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'>
                    useCallback
                </a>
                <a href='/hoc' className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'>
                    React-HOC
                </a>
                <a
                    href='/hoc-check-permission'
                    className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'
                >
                    React-HOC-CheckPermission
                </a>
                <a
                    href='/extensible-style-pattern-01'
                    className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'
                >
                    Extensible Style Pattern 01
                </a>
            </div>
        </div>
    );
}

export default App;
