import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

MySwal.fire({
    title: <p>Please use letters and numbers instead of characters!</p>,
    onOpen: () => {
        // `MySwal` is a subclass of `Swal`
        //   with all the same instance & static methods
        MySwal.clickConfirm()
    }
}).then(() => {
    return MySwal.fire(<p>Shorthand works too</p>)
})

export default ErrorMessage
