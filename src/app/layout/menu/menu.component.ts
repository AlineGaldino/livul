import { Component } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    constructor(public readonly themeService: ThemeService) { }
}
