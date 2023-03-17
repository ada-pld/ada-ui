import { isEmail, useForm } from '@mantine/form';

export const AddUserForm = () => {
    return useForm({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            role: 'User',
        },
        validate: {
            firstname: (value) => (value.length < 2 ? 'First name must have at least 2 letters' : null),
            lastname: (value) => (value.length < 2 ? 'Last name must have at least 2 letters' : null),
            email: isEmail('Invalid email'),
        },
    });
};