import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';

export const Form = () => {
    
    const schema = yup.object().shape({
        fullName: yup.string().required("Full name is required"),
        email: yup.string().email().required(),
        age: yup.number().typeError("age must be more than 18").positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null], "Password do not match").required()
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const test = (data) => {
        console.log("Allah is the greatest of all");
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(test)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <br/>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p>{errors.email?.message}</p><br/>
            <input type="number" placeholder="Age..." {...register("age")}/>
            <p>{errors.age?.message}</p><br/>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p>{errors.password?.message}</p><br/>
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p><br/>
            <input type="submit" />

        </form>
    )
}