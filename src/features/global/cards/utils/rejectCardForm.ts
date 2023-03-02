import { useForm } from '@mantine/form';

export const rejectCardForm = () => {
    return useForm({
        initialValues: {
            reason: '',
        },
        validate: {
            reason: (value) => (value.length <= 10 ? 'The reason mut be at least 10 characters long' : null),
        }
    });
};