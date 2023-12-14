import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@NgModule({
    declarations: [
        ImageDialogComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        RouterModule,
        MatButtonModule,
    ],
    exports: [
        ImageDialogComponent,
    ],
    entryComponents: [
        ImageDialogComponent,
    ]
})
export class DialogsModule { }
