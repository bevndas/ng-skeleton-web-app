import {animate, style, transition, trigger} from '@angular/animations';

export const fadeoutAnimation = trigger('fadeInOut', [
  transition(':leave', [   // :enter is alias to 'void => *'
    style({transform: 'scale(0.5)', position: 'absolute', opacity: 0.5}),
    animate(250, style({transform: 'scale(0)'}))
  ])
]);
