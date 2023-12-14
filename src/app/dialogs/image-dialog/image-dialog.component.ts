import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ThemeService } from '../../shared/services/theme.service';

@Component({
    selector: 'app-image-dialog',
    templateUrl: './image-dialog.component.html',
    styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {
    public path: string = '';

    constructor(
        public readonly themeService: ThemeService,
        public readonly dialogRef: MatDialogRef<ImageDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { path: string },
    ) { }

    public ngOnInit(): void {
        const { path } = this.data;
        this.path = path;
    }

    public cancel(): void {
        this.dialogRef.close();
    }
}
