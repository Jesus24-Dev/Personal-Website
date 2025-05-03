type IconProps = { imgName: string }

function Icon({imgName}: IconProps) {
    return (
        <img 
            src={`/img/icons/${imgName}.png`}
            className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-200 ease-in-out hover:-translate-y-2 hover:scale-110"
            alt={`${imgName} icon`}
            loading="lazy"
        />
    );
}

export default Icon;