import { useForm } from '@mantine/form';

import { Card } from 'types/apiTypes';

export const EditCardForm = (card: Card) => {
    return useForm({
        initialValues: {
            name: "",
            asWho: "",
            task: "",
            description: "",
            partId: 0,
            workingDays: 0,
            dods: "",
            assignees: [""],
        },
        validate: {
            workingDays: (value) => (value === null || value <= 0 ? 'You must work at least 0.5 days' : null),
        }
    });
};