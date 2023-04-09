import { Divider } from '@mantine/core';

import Banner from './components/AdminWelcome/Banner';
import Setup from './components/AdminWelcome/Setup';

export function AdminWelcome() {
    return (
        <div style={{padding: 20}}>
            <Banner />
            <Divider style={{marginTop: 20}} />
            <Setup />
        </div>
    );
}

export default AdminWelcome;