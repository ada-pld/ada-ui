import { UsersList } from "store/api/types/fetchedData"

interface Props {
    user: UsersList | null;
    editUser: any;
    values: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        role: string;
    };
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const editUserHandling = ({user, editUser, values, setOpened}: Props) => {
    editUser({id: user!.id, firstname: values.firstname, lastname: values.lastname, email: values.email, password: values.password, role: values.role.toUpperCase()});
    setOpened(false);
}