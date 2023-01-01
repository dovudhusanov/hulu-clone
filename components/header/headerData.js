import {
    HomeIcon,
    CheckBadgeIcon,
    LightBulbIcon,
    MagnifyingGlassIcon,
    UserIcon,
    BriefcaseIcon
} from "@heroicons/react/24/outline";
import styles from '../../styles/Home.module.css';

export const NavData = [
    {
        title: "Home",
        path: "/",
        icon: <HomeIcon className={styles.icon}/>
    },
    {
        title: "Verified",
        path: "/verified",
        icon: <CheckBadgeIcon className={styles.icon}/>
    },
    {
        title: "Collections",
        path: "/collection",
        icon: <BriefcaseIcon className={styles.icon}/>
    },
    {
        title: "Trending",
        path: "/trending",
        icon: <LightBulbIcon className={styles.icon}/>
    },
    {
        title: "Search",
        path: "/search",
        icon: <MagnifyingGlassIcon className={styles.icon}/>
    },
    {
        title: "Account",
        path: "/account",
        icon: <UserIcon className={styles.icon}/>
    }
]