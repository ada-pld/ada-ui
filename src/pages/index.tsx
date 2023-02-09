import { useEffect } from 'react';

import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/login')
    }, [])
}

export default Index
