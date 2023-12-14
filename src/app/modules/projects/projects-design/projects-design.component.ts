import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ThemeService } from '../../../shared/services/theme.service';
import { ImageDialogComponent } from '../../../dialogs/image-dialog/image-dialog.component';

@Component({
    selector: 'app-projects-design',
    templateUrl: './projects-design.component.html',
    styleUrls: ['./projects-design.component.scss']
})
export class ProjectsDesignComponent {
    constructor(
        private readonly themeService: ThemeService,
        private readonly dialog: MatDialog,
    ) { }


    public getEditionSource(): string {
        return this.themeService.isDarkMode ?
            'assets/images/common/edicao-black.png' :
            'assets/images/common/edicao-white.png';
    }

    public open(path: string): void {
        this.dialog
            .open(ImageDialogComponent, {
                data: { path },
                panelClass: 'custom-image-dialog'
            });
    }
}  
