import { useEffect } from 'react';

import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()

    useEffect(() => {
        router.replace('/login')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default Index