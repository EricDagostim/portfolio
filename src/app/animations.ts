
import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    state(':enter',
        style({ opacity: 0, transform: 'translateY(-20px)' })
    ),
    transition(':enter, :leave',
        [animate(300,
            style({
                opacity: 1,
                transform: 'translateY(-0px)'
            })),
        ]
    ),
]);