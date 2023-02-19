import FullNavBar from './FullNavBar';

import { useRouter } from 'next/router';

import { useGetUserInfos } from 'hooks/api/useGetUserInfos';

import { useViewportSize } from '@mantine/hooks';
import ResponsiveNavBar from './ResponsiveNavBar';

const NavBar: React.FC = () => {
    const { pathname } = useRouter();
    const { width } = useViewportSize();

    return pathname.includes("home") ? (
        <>
            {width >= 800
                ? <FullNavBar page={pathname} />
                : <ResponsiveNavBar page={pathname} />
            }
        </>
    ) : <></>;
}

export default NavBar;