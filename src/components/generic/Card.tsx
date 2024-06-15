import ReactIcon from "@/icons/react"
import TailwindIcon from "@/icons/tailwind"
import HTMLIcon from "@/icons/html"
import CSSIcon from "@/icons/css"
import JavascriptIcon from "@/icons/javascript"
import JavaIcon from "@/icons/java"
import PostgresqlIcon from "@/icons/postgresql"
import AstroIcon from "@/icons/astro"
import GitIcon from "@/icons/git"

interface Props {
    skill: string
    color: string
}

const iconMap: { [key: string]: React.ReactNode } = {
    React: <ReactIcon />,
    Tailwind: <TailwindIcon />,
    HTML: <HTMLIcon />,
    CSS: <CSSIcon />,
    JavaScript: <JavascriptIcon />,
    Java: <JavaIcon />,
    Postgresql: <PostgresqlIcon />,
    Astro: <AstroIcon />,
    Git: <GitIcon />
}

const SkillCard: React.FC<Props> = ({ skill, color }) => {
    const Icon = iconMap[skill] || null

    return (
        <li className={`flex gap-4 transition-all delay-75 text-xl px-8 py-4 items-center border rounded-lg hover:cursor-pointer hover:bg-${color}-400/40 hover:shadow-glow hover:text-${color}-600 hover:shadow-${color}-400/40 hover:border-${color}-400/40`}>
            {Icon}
            {skill}
        </li>

    )
}

export default SkillCard