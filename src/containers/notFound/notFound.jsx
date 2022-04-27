import Button from "../../components/button/"

const NotFoundContainer = () => {
    return(
        <div className="not-found">
            <h1>Sorry, we cant find what you want</h1>
            <p>please go back and search for another one</p>
            <Button link="/" text="Go back" />
        </div>
    )
}
export default NotFoundContainer