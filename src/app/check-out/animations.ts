import { animate, trigger, style, state, group, transition } from '@angular/animations';



export const buttonStateTrigger = trigger('buttonState', [
    state('valid', style({
        backgroundColor: 'green'
    })),
    state('invalid', style({
        backgroundColor: 'red'
    })),
    transition('invalid => valid', [
        group([
            animate(100, style({
                transform: 'scale(1.1)'
            })),
            animate(200, style({
                backgroundColor: 'green'
            }))
        ]),
        animate(200, style({
            transform: 'scale(1)'
        }))
    ]) 
   
]);
