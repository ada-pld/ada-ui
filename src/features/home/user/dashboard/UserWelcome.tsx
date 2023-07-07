import Banner from './components/AdminWelcome/Banner';

import DashboardWelcome from './components/UserWelcome/DashboardWelcome';
import CardsWelcome from './components/UserWelcome/CardsWelcome';
import CustomLoader from 'components/loader/CustomLoader';

interface Props {
    setOpenAdd?: React.Dispatch<React.SetStateAction<boolean>>;
    type: "sprint" | "dashboard";
}

const UserWelcome: React.FC<Props> = ({setOpenAdd, type}) => {
    return (
        <div style={{padding: 20}}>
            <Banner />
            { type === "dashboard" && setOpenAdd
                ? <DashboardWelcome setOpenAdd={setOpenAdd} />
                : type === "sprint"
                ? <CardsWelcome />
                : <CustomLoader />
            }
        </div>
    );
}

export default UserWelcome;