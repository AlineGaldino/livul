import { Component, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-round-button',
    templateUrl: './round-button.component.html',
    styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent {
    @Input() solid?: boolean = false;
    @Input() href?: string = '';
    @Input() routerLink?: string = '';

    constructor(
        public readonly themeService: ThemeService,
        @Inject(DOCUMENT) private document: Document
    ) { }

    public handleClick(event: Event) {
        if (this.href) {
            event.preventDefault();
            this.document.location.href = this.href;
        }
    }
}
