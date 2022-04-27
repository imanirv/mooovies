
import Navbar from "./elements/navbar"


const MainLayout = ({children, isSearch}) => {
    return(
        <>
            <Navbar isSearch={isSearch} />
            {children}
        
        </>
    )
}


export default MainLayout