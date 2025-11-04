import { useMainStore } from "~/store/main.store";

export const publicMenuItems = [
  {
    label: 'home',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'about',
    icon: 'pi pi-info-circle',
    route: '/about',
  },
  {
    label: 'ethology',
    icon: 'pi pi-book',
    route: '/ethology',
  },
  {
    label: 'adoption',
    icon: 'pi pi-heart',
    route: '/adoption',
  },
  {
    label: 'veterinarians',
    icon: 'pi pi-user-plus',
    route: '/veterinarians',
  },
  {
    label: 'contact',
    icon: 'pi pi-phone',
    route: '/contact',
  },
  {
    label: 'login',
    icon: 'pi pi-sign-in',
    route: '/auth',
  }
];

export const authMenuItems = [
  {
    label: 'home',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'adoption',
    icon: 'pi pi-heart',
    route: '/adoption',
  }
];
