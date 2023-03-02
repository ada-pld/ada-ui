import { Center, Loader } from "@mantine/core";

const CustomLoader = () => {
    return (
        <Center style={{height: "100%", width: "100%"}}>
            <Loader />
        </Center>
    );
}

export default CustomLoader;