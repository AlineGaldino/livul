import { animate, style, transition, trigger } from '@angular/animations';

export const FADE_SLIDE_IN_OUT_ANIMATION = [
    trigger('fadeSlideInOut', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(10px)' }),
            animate('500ms {{delay}}ms', style({ opacity: 1, transform: 'translateY(0)' })),
        ], { params: { delay: 0 } }),
        transition(':leave', [
            animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
        ]),
    ]),
];
