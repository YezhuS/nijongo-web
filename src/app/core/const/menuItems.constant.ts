import {PATH} from './routes.constant';
import {MenuItemOptions} from '../../lib/model/menuItem.interface';

export const ItemsOption: MenuItemOptions[] = [
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

export const ItemsNavigation: MenuItemOptions[] = [
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
];
