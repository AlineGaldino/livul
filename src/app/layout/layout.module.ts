import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BlankComponent } from './blank/blank.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [
        BlankComponent,
        MenuComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        SharedModule,
    ]
})
export class LayoutModule { }
