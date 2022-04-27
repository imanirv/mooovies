import { useRouter } from "next/router";

const Button = ({text, link}) => {
    const {push} = useRouter()
    return <button className="btn" onClick={() => push(link)}>{text}</button>
}

export default Button