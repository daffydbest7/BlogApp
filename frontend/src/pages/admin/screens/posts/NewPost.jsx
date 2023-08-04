import React, { useEffect }  from 'react';
//import { useState } from 'react';

import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
//import parseJsonToHtml from "../../../../utils/parseJsonToHtml";
import { createNewPost } from '../../../../services/index/posts';
import { useSelector} from 'react-redux';
//import { userActions } from '../../../../store/reducers/userReducers';

const NewPost = () => {
    const navigate = useNavigate();
    //const dispatch = useDispatch();
    const userState = useSelector((state) => state.user)

   const {mutate: mutateNewPost, isLoading, } = useMutation({
        mutationFn:({title, caption, content, tags, photo,user, slug, token})=>{
            return  createNewPost({title, caption, content, tags, photo,user, slug, token});
        },
        onSuccess: () => {
          toast.success(
            "Your post was created successfully",
          );
          // dispatch(userActions.setUserInfo(data));
            //localStorage.setItem('account', JSON.stringify(data));
        },
        onError: (error)=>{
            toast.error(error.message)
            console.log(error)
        }
    })

    useEffect(()=>{
        if(!userState.userInfo){
            navigate("/");
        }
    }, [navigate,userState.userInfo])

    const { 
        handleSubmit, register,
        formState: { errors, isValid},
        
    } = useForm({
        defaultValues:{
            title: "",
            content: "",
            tags: "",
            caption:"",
            slug:"",
            photo:"",
           
        },
        mode: "onChange",
    })

    //const [value, setValue] = useState("");

    const submitHandler = (data)=>{
        const {photo}=JSON.stringify(data?.photo);
        const {title, caption, content,tags, slug}=data;
        mutateNewPost({title, caption,slug,photo, content, tags, token: userState.userInfo.token})
        
    }

   
  return (
  
    <section className='container mx-auto px-5 py-10'>
        <div className='w-full max-w-sm mx-auto'>
        <h1 className='text-4xl font-bold text-center text-black mb-8'>
            CREATE NEW POST
        </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className='flex flex-col mb-6 w-full'>
            
            <label htmlFor='name' className='text-[#5a7184] font-semibold block'>
                Title
            </label>
            <input {...register("title", {
                minLength:{
                    value: 5,
                    message: "title must be at least 5 character "
                },
                required:{
                    value: true,
                    message: "Title is required",
                }
            })}
            
            type="text" id='title' placeholder='Enter title'  name='title'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.title ? "border-red-500" : "border-[#c3cad]"}` }/>
            {errors.title?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.title.message}</p>
            ) }
             
            
            <label htmlFor='caption' className='text-[#5a7184] mt-3 font-semibold block'>
                Caption
            </label>
            <input {...register("caption", {
                minLength:{
                    value: 5,
                    message: "Caption must be at least 5 character "
                },
                required:{
                    value: true,
                    message: "Caption is required",
                }
            })}
            
            type="text" id='caption' placeholder='Enter caption'  name='caption'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.caption ? "border-red-500" : "border-[#c3cad]"}` }/>
            {errors.caption?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.caption.message}</p>
            ) }
  

            <label htmlFor='slug' className='text-[#5a7184] font-semibold block mt-3'>
                Slug
            </label>
            <input {...register("slug", {
                minLength:{
                    value: 3,
                    message: "slug must be at least 3 character "
                },
                required:{
                    value: true,
                    message: "slug is required",
                }
            })}
            
            type="text" id='slug' placeholder='Enter slug'  name='slug'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.slug ? "border-red-500" : "border-[#c3cad]"}` }/>
            {errors.slug?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.slug.message}</p>
            ) }

            <label htmlFor='tags' className='text-[#5a7184] font-semibold block mt-3'>
                Tags
            </label>
            <input {...register("tags", {
                minLength:{
                    value: 3,
                    message: "tag must be at least 3 character "
                },
                required:{
                    value: true,
                    message: "tag is optional",
                }
            })}
            
            type="text" id='tags' placeholder='Enter tag'  name='tags'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.tags ? "border-red-500" : "border-[#c3cad]"}` }/>
            {errors.tags?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.tags.message}</p>
            ) }

        <label htmlFor='content' className='text-[#5a7184] font-semibold block mt-3'>
                Content
            </label>
            <textarea {...register("content", {
                minLength:{
                    value: 3,
                    message: "Content must be at least 3 character "
                },
                required:{
                    value: true,
                    message: "content is optional",
                }
            })}
            rows={10}
            type="text" id='content' placeholder='Leave your content here...'  name='content'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.content ? "border-red-500" : "border-[#c3cad]"}` }/>
            {errors.content?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.content.message}</p>
            ) }

            <label htmlFor='photo' className='text-[#5a7184] font-semibold block mt-3'>
                Blog Picture
            </label>
            <input {...register("photo", {
               
                required:{
                    value: false,
                    message: "content is optional",
                }
            })}
            
            type="file" id='photo' placeholder='photo...'  name='photo'
            className={`placeholder:text-[#959ead] text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border  ${errors.photo ? "border-red-500" : "border-[#c3cad]"}` }/>
            {errors.photo?.message && (
                <p className='text-red-500 text-xs mt-1'> {errors?.photo.message}</p>
            ) }
          

            <button  type="submit" disabled={!isValid || isLoading}
            id='submit' 
            className=' bg-teal-500 text-black mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad] my-6 disabled:opacity-70 disabled:cursor-not-allowed'>Post</button>
          
            </div>
        </form>
        </div>
    </section>
  
    
  )
}

export default NewPost

