import Image from 'next/image';
import error404 from "../../public/images/error404.svg";

const FourOFour = () => {
	return (
		<div className="bg-[#C80F2E] h-screen flex justify-center items-center ">
			<Image
                src={error404}
                alt="Page Not Found"
            />
		</div>
	);
};

export default FourOFour;