import PatternBtn from "@/components/button/PatternBtn";
import PatternTButton from "@/components/button/PatternTButton";
import PatternCard from "@/components/card/PatternCard";

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
            <PatternCard
                variant='default'
                widthType='narrow'
                title='Card Title'
                hasShadow
                description='sdfjlkasjfl;kasdjfasl;fj ksjdfkl ajs;fl lksdjf390'
                image='https://picsum.photos/seed/1724941182728/600/400'
                actionFn={() => alert("clicked")}
                subtitle='Subtitle'
            />
        </div>
    );
};
export default ExtensibleStylePatternPage01;
