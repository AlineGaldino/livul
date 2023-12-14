import { Component } from '@angular/core';

import { ThemeService } from '../../../shared/services/theme.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    constructor(private readonly themeService: ThemeService) { }

    public getHeaderSource(): string {
        return this.themeService.isDarkMode ?
            'assets/images/common/manchas-brancas.png' :
            'assets/images/common/manchas-pretas.png';
    }

    public getDeviceSource(): string {
        return this.themeService.isDarkMode ?
            'assets/images/common/devices-black.png' :
            'assets/images/common/devices-white.png';
    }

    public getOunceSource(): string {
        return this.themeService.isDarkMode ?
            'assets/images/common/onca-branca.png' :
            'assets/images/common/onca-preta.png';
    }

    public getEditionSource(): string {
        return this.themeService.isDarkMode ?
            'assets/images/common/edicao-black.png' :
            'assets/images/common/edicao-white.png';
    }
}
