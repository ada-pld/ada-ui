import FullNavBar from './FullNavBar';

interface Props {
    page: string;
}

const NavBar: React.FC<Props> = ({page}) => {
    return (
        <>
            <FullNavBar page={page} />
        </>
    );
}

export default NavBar;