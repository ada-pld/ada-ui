import { useForm } from '@mantine/form';

export const addCardForm = () => {
    return useForm({
        initialValues: {
            name: '',
            asWho: '',
            task: '',
            description: '',
            partId: 0,
            workingDays: null,
            dods: '',
            assignees: [],
        },
        validate: {
            workingDays: (value) => (value === null || value <= 0 ? 'You must work at least 0.5 days' : null),
        }
    });
};