import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Error = () => {
    const router = useRouter();

    useEffect(async () => {
        // Check if the error status code is 404 (Not Found)
        if (router.asPath === '/404') return; // Preventing infinite loop

        // Redirect to the custom 404 page
        await router.push('/404');
    }, []);

    return null; // This component doesn't render anything
};

export default Error;
