import { AiOutlineDashboard } from "react-icons/ai";
import { RxCardStack, RxComponent2 } from "react-icons/rx";
import { MdOutlineCallToAction } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineCog6Tooth } from "react-icons/hi2"
import { FiUsers } from "react-icons/fi";
import { BsCalendar2Week, BsCardChecklist } from "react-icons/bs"
import { SlLayers } from "react-icons/sl";

export const userTabs = [
    { link: '/home', label: 'Dashboard', icon: AiOutlineDashboard, id: 'navbar-homepage-link' },
    { link: '/home/mycards', label: 'My cards', icon: RxCardStack, id: 'navbar-mycards-link' },
    { link: '/home/sprint-board', label: 'Sprint board', icon: SlLayers, id: 'navbar-sprintboard-link' },
    { link: '/home/meetings', label: 'Meetings', icon: MdOutlineCallToAction, id: 'navbar-meetings-link' },
    { link: '/home/pld', label: 'PLD', icon: HiOutlineDocumentText, id: 'navbar-pld-link' },
];

export const editorTabs = [
    { link: '/home/editor/cards', label: 'Cards', icon: BsCardChecklist, id: 'navbar-cards-link' },
    { link: '/home/editor/sprints', label: 'Sprints', icon: BsCalendar2Week, id: 'navbar-sprints-link' },
    { link: '/home/editor/parts', label: 'Parts', icon: RxComponent2, id: 'navbar-parts-link' },
    { link: '/home/editor/users', label: 'Users', icon: FiUsers, id: 'navbar-users-link' },
];

export const adminTabs = [
    { link: '/home/admin/config', label: 'Config', icon: HiOutlineCog6Tooth, id: 'navbar-config-link' },
];