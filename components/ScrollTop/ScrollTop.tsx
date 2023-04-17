import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollTop() {
    const router = useRouter();
    const pathname: string = router.pathname;
    
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return <></>;
}