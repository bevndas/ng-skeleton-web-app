import {animate, style, transition, trigger} from '@angular/animations';

export const showHideAnimation = trigger('showHide', [
  transition(':enter', [   // :enter is alias to 'void => *'
    style({opacity: 0, height: 0}),
    animate('250ms ease-in-out', style({opacity: 1, height: '*'}))
  ]),
  transition(':leave', [   // :enter is alias to 'void => *'
    style({ opacity: 0.5, height: '*'}),
    animate('250ms ease-in-out', style({ opacity: 0, height: 0}))
  ])
]);
