import {MenuItem} from 'primeng/api';
import {PATH} from './routes.constant';

export const ItemsOption: MenuItem[] = [
  {
    label: 'Cuenta',
    routerLink: '',
  },
  {
    label: 'Cerrar sesión',
    routerLink: '',
  },
  {
    label: 'Opciones',
    routerLink: '',
  },
];

export const ItemsNavigation: MenuItem[] = [
  {
    label: 'Secciones',
    items: [
      {
        label: 'Alfabeto',
        routerLink: PATH.ALPHABET,
      },
      {
        label: 'Vocabulario',
        routerLink: PATH.VOCABULARY,
      },
      {
        label: 'Partículas',
        routerLink: PATH.PARTICLE,
      },
    ],
  },
];
