export const menuItems = [
  {
    label: 'home',
    icon: 'pi pi-home',
    route: '/',
    command: () => {
      navigateTo('/');
    }
  },
  {
    label: 'about',
    icon: 'pi pi-info-circle',
    route: '/about',
    command: () => {
      navigateTo('/about');
    }
  },
  {
    label: 'ethology',
    icon: 'pi pi-book',
    route: '/ethology',
    command: () => {
      navigateTo('/ethology');
    }
  },
  {
    label: 'adoption',
    icon: 'pi pi-heart',
    route: '/adoption',
    command: () => {
      navigateTo('/adoption');
    }
  },
  {
    label: 'veterinarians',
    icon: 'pi pi-user-plus',
    route: '/veterinarians',
    command: () => {
      navigateTo('/veterinarians');
    }
  },
];