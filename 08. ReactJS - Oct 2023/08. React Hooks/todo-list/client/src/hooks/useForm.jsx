import { useState } from "react";

export default function useForm(initValues, onSubmitHandler) {

    const [formValue, setFormValue] = useState([initValues]);

    const changeHandler = (event) => {
        setFormValue(state => ({ ...state, [event.target.name]: event.target.value }));
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (onSubmitHandler) {
            onSubmitHandler(formValue);
        }
    }

    return {
        formValue,
        changeHandler,
        onSubmit
    }

}