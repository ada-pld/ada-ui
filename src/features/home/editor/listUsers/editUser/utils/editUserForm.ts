import { isEmail, useForm } from '@mantine/form';

interface Props {
    firstname: string;
    lastname: string;
    email: string;
    role: string;
    editPassword: boolean;
}

export const EditUserForm = ({firstname, lastname, email, role, editPassword}: Props) => {
    return useForm({
        initialValues: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: '',
            role: role,
        },
        validate: {
            firstname: (value) => (value.length < 2 ? 'First name must have at least 2 letters' : null),
            lastname: (value) => (value.length < 2 ? 'Last name must have at least 2 letters' : null),
            email: isEmail('Invalid email'),
            password: (value) => (value.length < 4 && editPassword === true ? 'Password must be at least 4 characters long' : null),
        },
    });
};