import FullNavBar from './FullNavBar';

import { useRouter } from 'next/router';

import { useViewportSize } from '@mantine/hooks';
import ResponsiveNavBar from './ResponsiveNavBar';
import { useAppSelector } from 'store/hooks/hooks';

const NavBar: React.FC = () => {
    const userRole = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));
    const { pathname } = useRouter();
    const { width } = useViewportSize();

    return pathname.includes("home") && userRole ? (
        <>
            {width >= 800
                ? <FullNavBar page={pathname} userRole={userRole}  />
                : <ResponsiveNavBar page={pathname} userRole={userRole} />
            }
        </>
    ) : <></>;
}

export default NavBar;