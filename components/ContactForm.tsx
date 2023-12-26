import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { TbMailFilled } from "react-icons/tb";
import { FaLocationPin } from "react-icons/fa6";
import {ZodType, z} from "zod";

import Modal from './Modal'



type Input = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
    const schema = z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email().min(1),
        message: z.string().min(5)
    });

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm<Input>({ resolver: zodResolver(schema)})
    const onSubmit: SubmitHandler<Input> = (data) => {setOpenModal(true)}
    const [openModal, setOpenModal] = useState(false);


    
    
      return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className='flex flex-col justify-content-center bg-red-50 w-10/12 p-5'>
            <Modal show = {openModal} handleClose={() => {setOpenModal(false); reset()}}>
                <div className='flex flex-col'>
                    <h1 className='text-3xl'>Message has been sent!</h1>
                    <p>First Name: { watch("firstName")}</p>
                    <p>Last Name: { watch("lastName")}</p>
                    <p>Email: { watch("email")}</p>
                    <p>Message: { watch("message")}</p>
                </div>

            </Modal>
            <div className='flex flex-col justify-end'>
            <h1 className='text-4xl items-center font-medium pb-4 text-center text-primary-red' >Get In Touch</h1>
            <div className='w-40 border-b-2 border-primary-red mb-10 mx-auto'></div>

            </div>
            
        <div className='flex flex-col md:flex-row gap-5'>
            <div className='basis-1/2'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex flex-col gap-5'>
                        {/* register your input into the hook by invoking the "register" function */}

                        <div className='flex flex-col'>
                            <label className='text-primary-red'>First Name*</label>
                            <input {...register("firstName", { required: true })} placeholder='First Name' className='p-2 rounded'/>
                            {errors.firstName && <span className='text-sm text-red-700'>{errors.firstName.message}</span>}
                        </div>
                    
                        <div className='flex flex-col'>
                            <label className='text-primary-red'>Last Name*</label>
                            <input {...register("lastName", { required: true })} placeholder='Last Name' className='p-2 rounded'/>
                            {errors.lastName && <span className='text-sm text-red-700'>{errors.lastName.message}</span>}
                        </div>

                

                        <div className='flex flex-col'>
                            <label className='text-primary-red'>Email Address*</label>
                            <input {...register("email", { required: true })} placeholder='Email' className='p-2 rounded'/>
                            {errors.email && <span className='text-sm text-red-700'>{errors.email.message}</span>}
                        </div>
                    

                        <div className='flex flex-col'>
                            <label className='text-primary-red'>Enter your message*</label>
                            <textarea {...register("message", { required: true })} placeholder='Message' rows={4} className='p-2 rounded'></textarea>
                            {errors.message && <span className='text-sm text-red-700'>{errors.message.message}</span>} 
                        </div>
            

                            <input type="submit" className='transition ease-in-out border-2 bg-primary-red text-white p-2 hover:bg-red-700 duration-300 w-min' value="Send Message"/>
                    </div>
                
                </form>
            </div>
        

            <div className='basis-1/2 flex flex-col justify-center ml-10 gap-3'>
               
                <div className='bg-white flex align-middle p-3'>
                    <span>
                        <div className='flex flex-row items-center gap-2 pb-5'>
                        <FaLocationPin color='#ff4d73'/>						
                        <a href='https://goo.gl/maps/pC4D4XR5Ejr1ebmW9'>
								<h5>Philip Guthrie Hoffman Hall (PGH), Room 563</h5>
							</a>
                        </div>
							
							<div>
								<iframe
									title='CougarCS Office'
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683.1469037177662!2d-95.34468975917542!3d29.721679075847103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640be5699bd0899%3A0xca1113d89a350732!2sPhilip%20Guthrie%20Hoffman%20Hall%20(PGH)!5e0!3m2!1sen!2sus!4v1576703793192!5m2!1sen!2sus'
								></iframe>
							</div>
						</span>
				</div>
                <div className='bg-white flex align-middle p-2 gap-2 items-center'>
                    <TbMailFilled color='#ff4d73' />
                    <a href='mailto:info@cougarcs.com'>info@cougarcs.com</a>
                </div>
            </div>

            
        </div>
           
        </div>
       
      
       
      )
}

export default ContactForm

