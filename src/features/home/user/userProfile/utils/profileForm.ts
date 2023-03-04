import { isEmail, useForm } from "@mantine/form";

import { UserInfos } from "store/api/types/fetchedData";

interface Props {
    user: UserInfos;
}

export const profileForm = ({user}: Props) => {
    return useForm({
        initialValues: {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: '',
            role: user.role,
        },
        validate: {
            firstname: (value) => (value.length < 2 ? 'Part name must have at least 2 letters' : null),
            lastname: (value) => (value.length < 2 ? 'Part name must have at least 2 letters' : null),
            email: isEmail(),
            password: (value) => (value.length < 6 ? 'Part name must have at least 6 characters' : null),
        },
    });
}