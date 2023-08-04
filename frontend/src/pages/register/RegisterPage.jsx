import React, { useEffect }  from 'react';

import {useForm} from "react-hook-form";
import { Link,useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import MainLayout from '../../components/MainLayout';
import { signup } from '../../services/index/users';
import { useDispatch , useSelector} from 'react-redux';
import { userActions } from '../../store/reducers/userReducers';

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user)

   const {mutate, isLoading} = useMutation({
        mutationFn:({name,email, password})=>{
            return signup({name, email, password});
        },
        onSuccess: (data) => {
           dispatch(userActions.setUserInfo(data));
            localStorage.setItem('account', JSON.stringify(data));
        },
        onError: (error)=>{
            toast.error(error.message)
            console.log(error)
        }
    })

    useEffect(()=>{
        if(userState.userInfo){
            navigate("/");
        }
    }, [navigate,userState.userInfo])

    const { 
        register,handleSubmit,
        formState: { errors, isValid},
        watch,
    } = useForm({
        defaultValues:{
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
        },
        mode: "onChange",
    })

    const submitHandler = (data)=>{
        const {name, email, password}=data;
        mutate({name, email, password})
    }

    const password = watch('password');
  return (
   <MainLayout>
    <section className='container mx-auto px-5 py-10'>
        <div className='w-full max-w-sm mx-auto'>
        <h1 className='text-4xl font-bold text-center text-black mb-8'>
            SIGN UP
        </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className='flex flex-col mb-6 w-full'>
            
            <label htmlFor='name' className='text-[#5a7184] font-semibold block'>
                Name
            </label>
            <input {...register("name", {
                minLength:{
                    value: 1,
                    message: "Name must be at least 1 character "
                },
                required:{
                    value: true,
                    message: "Name is required",
                }
            })} type="text" id='name' placeholder='Enter name'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.name ? "border-red-500" : "border-[#c3cad]"}` }/>
            {errors.name?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.name.message}</p>
            ) }
             
            
            <label htmlFor='email' className='text-[#5a7184] mt-3 font-semibold block'>
                Email
            </label>
            <input {...register("email", {
                required:{
                    value: true,
                    message: "Email is required",
                },
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                },
            })}
            type="email" id='email' placeholder='Enter email'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad]"}`}/>
            {errors.email?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.email.message}</p>
            ) }

            <label htmlFor='password' className='text-[#5a7184] font-semibold block mt-3'>
                Password
            </label>
            <input {...register("password",{
                required: {
                    value: true,
                    message: "Password is required",
                },
                minLength:{
                    value: 6,
                    message: "Password length must be atleast 6 characters",
                }
            })} type="password" id='password' placeholder='Enter password'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad]"}`}/>
            {errors.password?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.password.message}</p>
            ) }

            <label htmlFor='confirmpassword' className='text-[#5a7184] font-semibold block mt-3'>
                Confirm Password
            </label>
            <input {...register("confirmpassword", {
                required: {
                    value: true,
                    message: "Confirm password is required",
                },
                validate: (value)=>{
                    if(value !== password){
                        return "passwords do not match";
                    }
                }
            })} type="password" id='confirmpassword' placeholder='Confirm password'
             className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.confirmpassword ? "border-red-500" : "border-[#c3cad]"}`}/>
             {errors.confirmpassword?.message && (
                 <p className='text-red-500 text-xs mt-1'> {errors?.confirmpassword.message}</p>
             ) }
           

            <button  type="submit" disabled={!isValid || isLoading}
            id='submit' 
            className=' bg-teal-500 text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad] my-6 disabled:opacity-70 disabled:cursor-not-allowed'>Register</button>
            <p className='text-black mt-3'>
               Already have an account? {' '}
               <span className='text-teal-500 font-semibold'><Link to='/login'>Login now</Link></span> 
            </p>
            </div>
        </form>
        </div>
    </section>
   </MainLayout>
    
  )
}

export default RegisterPage
