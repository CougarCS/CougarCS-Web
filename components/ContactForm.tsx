import React, { useState } from 'react'

import { useForm, SubmitHandler } from "react-hook-form"
import { TbMailFilled } from "react-icons/tb";
import { FaLocationPin } from "react-icons/fa6";
import Modal from './Modal'

type Input = {
  firstName: string
  lastName: string
  email: string
  message: string
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm<Input>()
    const onSubmit: SubmitHandler<Input> = (data) => {setOpenModal(true)}
    const [openModal, setOpenModal] = useState(false);


    
    
      return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className='flex flex-col justify-center bg-red-50 w-3/4 p-5'>
            <Modal show = {openModal} handleClose={() => {setOpenModal(false); reset()}}>
                <div className='flex flex-col'>
                    <h1 className='text-3xl'>Form Submitted!</h1>
                    <p>First Name: { watch("firstName")}</p>
                    <p>Last Name: { watch("lastName")}</p>
                    <p>Email: { watch("email")}</p>
                    <p>Message: { watch("message")}</p>
                </div>

            </Modal>
        <h1 className='text-4xl font-medium text-center border-b-2 border-primary-red pb-4 text-primary-red mb-10'>Get In Touch</h1>

        <div className='flex flex-row gap-5'>
            <div className='basis-1/2'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex flex-col gap-5'>
                        {/* register your input into the hook by invoking the "register" function */}

                        <div className='flex flex-col'>
                            <label className='text-primary-red'>First Name*</label>
                            <input {...register("firstName", { required: true })} placeholder='First Name'/>
                            {errors.firstName && <span className='text-sm text-red-700'>This field is required</span>}
                        </div>
                    
                        <div className='flex flex-col'>
                            <label className='text-primary-red'>Last Name*</label>
                            <input {...register("lastName", { required: true })} placeholder='Last Name'/>
                            {errors.lastName && <span className='text-sm text-red-700'>This field is required</span>}
                        </div>

                

                        <div className='flex flex-col'>
                            <label className='text-primary-red'>Email Address*</label>
                            {/* Email validation */}
                            <input {...register("email", { required: true })} placeholder='Email'/>
                            {errors.email && <span className='text-sm text-red-700'>This field is required</span>}
                        </div>
                    

                        <div className='flex flex-col'>
                            <label className='text-primary-red'>Enter your message*</label>
                            <textarea {...register("message", { required: true })} placeholder='Message' rows={4}></textarea>
                            {errors.message && <span className='text-sm text-red-700'>This field is required</span>} 
                        </div>
            

                            <input type="submit" className='transition ease-in-out border-2 bg-primary-red text-white p-1 hover:bg-red-700 duration-300 ' value="Send Message"/>
                    </div>
                
                </form>
            </div>
        

            <div className='basis-1/2 flex flex-col justify-center gap-3'>
               
                <div className='bg-white flex align-middle p-2 gap-2'>
                    <FaLocationPin color='#ff4d73'/>						
                    <span>
							<a href='https://goo.gl/maps/pC4D4XR5Ejr1ebmW9'>
								<h5>Philip Guthrie Hoffman Hall (PGH), Room 563</h5>
							</a>
							<div className='map'>
								<iframe
									title='CougarCS Office'
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683.1469037177662!2d-95.34468975917542!3d29.721679075847103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640be5699bd0899%3A0xca1113d89a350732!2sPhilip%20Guthrie%20Hoffman%20Hall%20(PGH)!5e0!3m2!1sen!2sus!4v1576703793192!5m2!1sen!2sus'
									style={{
										width: '100%',
										height: '100%',
										border: 0,
										paddingTop: '15px',
									}}
								></iframe>
							</div>
						</span>
				</div>
                <div className='bg-white flex align-middle p-2 gap-2'>
                    <TbMailFilled color='#ff4d73' />
                    <a href='mailto:info@cougarcs.com'>info@cougarcs.com</a>
                </div>
            </div>

            
        </div>
           
        </div>
       
      
       
      )
}

export default ContactForm

