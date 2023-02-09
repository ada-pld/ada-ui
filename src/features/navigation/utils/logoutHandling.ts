import { logout } from 'store/reducers/user/userSlice';

import { NextRouter } from 'next/router';
import { AppDispatch } from 'store/store';

import { showNotification } from '@mantine/notifications';

interface Props {
    dispatch: AppDispatch;
    router: NextRouter;
}

export const logoutHandling = ({dispatch, router}: Props) => {
    dispatch(logout());
    router.push("/login");
}