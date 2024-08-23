import PatternBtn from "@/components/button/PatternBtn";
import PatternTButton from "@/components/button/PatternTButton";

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
            <PatternTButton color='primary' size='large' onClick={handleClick}>
                TailwindCSS Primary
            </PatternTButton>
            <PatternTButton color='secondary' size='medium' onClick={handleClick}>
                TailwindCSS Secondary
            </PatternTButton>
            <PatternTButton color='info' size='small' onClick={handleClick}>
                TailwindCSS Info
            </PatternTButton>
        </div>
    );
};
export default ExtensibleStylePatternPage01;
