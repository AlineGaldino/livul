import { Component } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
    constructor(public readonly themeService: ThemeService) { }
}
