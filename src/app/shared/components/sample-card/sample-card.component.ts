import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sample-card',
    templateUrl: './sample-card.component.html',
    styleUrls: ['./sample-card.component.scss']
})
export class SampleCardComponent {
    @Input() reverse?: boolean = false;
    @Input() source: string = '';
}
