import IconList from "./IconList";
import Presentation from "./Presentation";

function Section() {
    return (
        <section id="Home" className="flex-grow flex flex-col items-center justify-center w-full gap-8">
            <Presentation/>
            <IconList/>
        </section>
    );
}

export default Section;