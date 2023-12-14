import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ThemeService } from '../../../shared/services/theme.service';
import { ImageDialogComponent } from '../../../dialogs/image-dialog/image-dialog.component';

@Component({
    selector: 'app-projects-illustration',
    templateUrl: './projects-illustration.component.html',
    styleUrls: ['./projects-illustration.component.scss']
})
export class ProjectsIllustrationComponent {
    constructor(
        private readonly themeService: ThemeService,
        private readonly dialog: MatDialog,
    ) { }

    public getOunceSource(): string {
        return this.themeService.isDarkMode ?
            'assets/images/common/onca-branca.png' :
            'assets/images/common/onca-preta.png';
    }
    
    public getLogoSource(): string {
        return this.themeService.isDarkMode ?
            'assets/images/cards/ilustracao-logo-branca.png' :
            'assets/images/cards/ilustracao-logo-preta.png';
    }

    public open(path: string): void {
        this.dialog
            .open(ImageDialogComponent, {
                data: { path },
                panelClass: 'custom-image-dialog'
            });
    }
}
