import Image from 'next/image';

const FourOFour = () => {
	return (
		<div className="bg-[#C80F2E] h-screen flex justify-center items-center ">
			<Image
				src="/images/error404.svg"
				alt="Page Not Found"
				width='500'
				height='500'
			/>
		</div>
	);
};

export default FourOFour;