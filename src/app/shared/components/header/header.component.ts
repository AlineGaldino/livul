import { Component } from '@angular/core';

import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 
    constructor(private readonly themeService: ThemeService) { }

    public getHeaderStyles(): { [prop: string]: string } {
        const background = this.themeService.isDarkMode ?
            'assets/images/common/manchas-brancas.png' :
            'assets/images/common/manchas-pretas.png';
        return {
            'backgroundImage': `url(\"${background}\")`,
        };
    }
}
