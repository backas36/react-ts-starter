import style from "./App.module.scss";

function App() {
    return (
        <div>
            <h1 className={style.h1}>Hello world!</h1>
            <a href='/debounce-throttle' className='text-2xl font-medium text-blue-600 hover:underline'>
                Debounce & Throttle
            </a>
        </div>
    );
}

export default App;
