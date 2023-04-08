import { useForm } from '@mantine/form';

export const AddCardForm = () => {
    return useForm({
        initialValues: {
            name: '',
            asWho: '',
            task: '',
            description: '',
            partId: 0,
            workingDays: '',
            dods: '',
            assignees: [],
        },
        validate: {
            workingDays: (value) => (value === null || value === '' || parseFloat(value) <= 0 ? 'You must work at least 0.5 days' : null),
        }
    });
};