import { animate, trigger, style, state, group, transition } from '@angular/animations';



export const buttonStateTrigger = trigger('buttonState', [
    state('valid', style({
        backgroundColor: '#42AB9E'
        
    })),
    state('invalid', style({
        backgroundColor: 'rgb(165, 165, 165)'  
        
    })),
    transition('invalid => valid', [
        group([
            animate(100, style({
                transform: 'scale(1.1)'
            })),
            animate(200, style({
                backgroundColor: '#42AB9E'
            }))
        ]),
        animate(200, style({
            transform: 'scale(1)'
        }))
    ]) 
   
]);

