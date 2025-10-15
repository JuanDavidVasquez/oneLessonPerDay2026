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
    route: '/pets',
    command: () => {
      navigateTo('/pets');
    }
  },
  {
    label: 'veterinarians',
    icon: 'pi pi-user-plus',
    route: '/veterinarians',
    command: () => {
      navigateTo('/veterinarians');
    }
  }
];