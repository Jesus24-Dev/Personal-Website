type IconProps = { imgName: string }

function Icon({imgName}: IconProps) {
    return (
        <img 
            src={`/img/icons/${imgName}.png`}
            className="transition-transform duration-200 ease-in-out hover:-translate-y-2"
            alt={`${imgName} icon`}
        />
    );
}

export default Icon;