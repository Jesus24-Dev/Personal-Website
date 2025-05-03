import Icon from "./Icon";

function IconList() {
    return (
        <aside className="flex gap-4">
            <Icon imgName='java'/>
            <Icon imgName='spring'/>
            <Icon imgName='ts'/>
            <Icon imgName='node'/>
            <Icon imgName='react'/>
            <Icon imgName='tailwind'/>
            <Icon imgName='git'/>
        </aside>
    );
}

export default IconList;