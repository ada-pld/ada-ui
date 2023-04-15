import { TbCircleDotted, TbCircleCheck, TbClock, TbCircleX } from "react-icons/tb";

export function StatusIcon(status: string | null) {
    switch (status) {
        case "finished":
            return <TbCircleCheck color="dimgray" />;
        case "in-progress":
            return <TbClock color="dimgray" />;
        case "not-started":
            return <TbCircleX color="dimgray" />;
        default:
            return <TbCircleDotted color="dimgray" />;
    }
}