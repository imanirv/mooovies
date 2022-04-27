import { useRouter } from "next/router"
import { useFormik } from "formik"
import * as Yup from "yup"

import Search from "../../icons/search"

const validationSchema = Yup.object({
    parameter: Yup.string().required()
})

const initialValues = {
    parameter: ""
}

const Navbar = ({isSearch = false}) => {
    const {push} = useRouter();
    const onSubmit = async (values) => {
        window.location.href = `/${values.parameter}`
    }
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return(
        <div className="navbar">
            <div className="brand" onClick={()=> push('/')}>Moovies</div>
            {isSearch && (
                <form action="" onSubmit={handleSubmit}>
                    <div className="search">
                        <input type="text" className="search-nav" name="parameter" onChange={handleChange} autoComplete="off"/>
                        <button type="submit"><Search / ></button>
                    </div>
                </form>
            )}

        </div>
    )
}

export default Navbar