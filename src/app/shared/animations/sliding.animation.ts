import {animate, group, query, style, transition, trigger} from '@angular/animations';

const left = [
  query(':enter, :leave', style({ position: 'fixed'}), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)', opacity: 0.5}), animate('.2s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))], {
      optional: true,
    }),
    // eslint-disable-next-line max-len
    query(':leave', [style({ transform: 'translateX(0%)', opacity: 0.8 }), animate('.2s ease-in-out', style({ transform: 'translateX(100%)', opacity: 0.05 }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed'}), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)', opacity: 0.5}), animate('.2s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))], {
      optional: true,
    }),
    // eslint-disable-next-line max-len
    query(':leave', [style({ transform: 'translateX(0%)', opacity: 0.8 }), animate('.2s ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0.05 }))], {
      optional: true,
    }),
  ]),
];

export const slidingAnimation = trigger('slidingAnim', [
  transition(':increment', right),
  transition(':decrement', left),
]);
