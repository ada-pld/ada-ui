import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { RxCardStack, RxComponent2 } from "react-icons/rx";
import { MdOutlineCallToAction } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";

export const adminTabs = [
    { link: '/parts', label: 'Parts', icon: RxComponent2 },
    { link: '/pld', label: 'PLD', icon: HiOutlineDocumentText },
    { link: '/users', label: 'Users', icon: FiUsers },
];

export const userTabs = [
    { link: '/dashboard', label: 'Dashboard', icon: AiOutlineDashboard },
    { link: '/mycards', label: 'My cards', icon: RxCardStack },
    { link: '/meetings', label: 'Meetings', icon: MdOutlineCallToAction },
    { link: '/profile', label: 'Profile', icon: AiOutlineUser },
];