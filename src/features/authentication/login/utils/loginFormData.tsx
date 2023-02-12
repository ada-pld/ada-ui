import { isEmail, useForm } from '@mantine/form';

export const useLoginForm = () => {
    return useForm({
        initialValues: {
            email: '',
            password: '',
            remember: false,
        },
        validate: {
            email: isEmail('Invalid email'),
        },
    });
};
