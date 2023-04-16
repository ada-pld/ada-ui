import { Divider } from '@mantine/core';

import Banner from './components/AdminWelcome/Banner';
import Setup from './components/AdminWelcome/AdminSetup';

import { useListUsers } from 'hooks/api/useListUsers';

import { useListParts } from 'hooks/api/useListParts';
import { useGetConfig } from 'hooks/api/useGetConfig';
import { useListSprints } from 'hooks/api/useListSprints';

export function AdminWelcome() {
    const { data: userList } = useListUsers(true);
    const { data: partList } = useListParts(true);
    const { data: sprintsList } = useListSprints();
    const { data: config } = useGetConfig();

    return userList && partList && config && sprintsList ? (
        <div style={{padding: 20}}>
            <Banner />
            <Divider style={{marginTop: 20}} />
            <Setup
                configSetup={config.config.Default_Password.value !== null}
                userSetup={userList.length > 1}
                partSetup={partList.length > 0}
                sprintsSetup={sprintsList.length > 0}
            />
        </div>
    ) : <></>;
}

export default AdminWelcome;