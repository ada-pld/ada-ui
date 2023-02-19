import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { RxCardStack, RxComponent2 } from "react-icons/rx";
import { MdOutlineCallToAction } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineCog6Tooth } from "react-icons/hi2"
import { FiUsers } from "react-icons/fi";

export const userTabs = [
    { link: '/home', label: 'Dashboard', icon: AiOutlineDashboard },
    { link: '/home/mycards', label: 'My cards', icon: RxCardStack },
    { link: '/home/meetings', label: 'Meetings', icon: MdOutlineCallToAction },
    { link: '/home/profile', label: 'Profile', icon: AiOutlineUser },
];

export const editorTabs = [
    { link: '/home/editor/parts', label: 'Parts', icon: RxComponent2 },
    { link: '/home/editor/users', label: 'Users', icon: FiUsers },
    { link: '/home/editor/pld', label: 'PLD', icon: HiOutlineDocumentText },
];

export const adminTabs = [
    { link: '/home/admin/config', label: 'Config', icon: HiOutlineCog6Tooth },
];