import { Component } from '@angular/core';

import { ThemeService } from '../../../shared/services/theme.service';

@Component({
    selector: 'app-projects-ui-ux',
    templateUrl: './projects-ui-ux.component.html',
    styleUrls: ['./projects-ui-ux.component.scss']
})
export class ProjectsUiUxComponent {
    constructor(private readonly themeService: ThemeService) { }

    public getDeviceSource(): string {
        return this.themeService.isDarkMode ?
            'assets/images/common/devices-black.png' :
            'assets/images/common/devices-white.png';
    }
}
