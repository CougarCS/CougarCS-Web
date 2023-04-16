import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { Payment } from '../Payment/Payment';
// import { MetaData } from '../Meta/MetaData';

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_KEY;
// const stripePromise = loadStripe(`${PUBLIC_KEY}`);

const meta: {title: string, desc: string, url: string, img: string} = {
	title: 'Register',
	desc: 'Become a CougarCS member',
	url: 'https://cougarcs.com/register',
	img: 'https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg',
};

const UserRegister = () => {
	return (
		<>
			{/* <MetaData {...meta} />
			<div className='bg-[#ebe0e0] flex flex-col items-center w-full mt-4'>
				<h1 className='text-center mt-4 mb-[0.7em]'>Register</h1>
				<Elements stripe={stripePromise}>
					<Payment />
				</Elements>
			</div> */}
		</>
	);
};

export default UserRegister;