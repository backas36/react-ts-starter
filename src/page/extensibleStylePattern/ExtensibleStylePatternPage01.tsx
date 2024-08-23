import PatternBtn from "@/components/button/PatternBtn";

const ExtensibleStylePatternPage01 = () => {
    const handleClick = () => {
        alert("clicked");
    };
    return (
        <div>
            <PatternBtn color='primary' size='large' onClick={handleClick}>
                Primary
            </PatternBtn>
            <PatternBtn color='secondary' size='medium' onClick={handleClick}>
                Secondary
            </PatternBtn>
            <PatternBtn color='info' size='small' onClick={handleClick}>
                Info
            </PatternBtn>
        </div>
    );
};
export default ExtensibleStylePatternPage01;
