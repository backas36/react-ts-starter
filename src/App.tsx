import style from "./App.module.scss";
const links = [
    { href: "/debounce-throttle", name: "Debounce & Throttle" },
    { href: "/flexbox-01", name: "Flexbox01" },
    { href: "/flexbox-item-grow", name: "Flexbox Item Grow" },
    { href: "/flexbox-item-shrink", name: "Flexbox Item Shrink" },
    { href: "/flexbox-rule", name: "Flexbox Rule" },
    { href: "/image-lazy", name: "Image Lazy Loading 01" },
    { href: "/image-lazy-02", name: "Image Lazy Loading 02" },
    { href: "/rwd-flexbox-card", name: "RWD Flexbox Card" },
    { href: "/img-ratio", name: "Image Ratio" },
    { href: "/card-image", name: "Card Image" },
    { href: "/suspense-image", name: "Suspense Image Loading" },
    { href: "/object-fit-image", name: "Object-fit Image" },
    { href: "/useLayoutEffect", name: "useLayoutEffect" },
    { href: "/memo", name: "memo" },
    { href: "/useCallback", name: "useCallback" },
    { href: "/hoc", name: "React-HOC" },
    { href: "/hoc-check-permission", name: "React-HOC-CheckPermission" },
    { href: "/extensible-style-pattern-01", name: "Extensible Style Pattern 01" },
    { href: "/compound-component-01", name: "Compound component 01" },
    { href: "/render-props-01", name: "Render Props 01" },
    { href: "/forward-ref", name: "Forward Ref 01" },
];

function App() {
    return (
        <div>
            <h1 className={style.h1}>Hello world!</h1>
            <div className='grid grid-cols-3 gap-4'>
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className='border-b py-2 text-2xl font-medium text-blue-600 hover:underline'
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default App;
