import { useAppSelector } from "store/hooks/hooks";

const Dashboard = () => {
    const user = useAppSelector((state) => state.user);

    return user.user.refreshToken ? (
        <div>
            <h3>user access token ? : {user.user.refreshToken}</h3>
        </div>
    ) : <></>;
}

export default Dashboard;