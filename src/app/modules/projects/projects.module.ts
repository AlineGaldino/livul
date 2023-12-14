import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { DialogsModule } from '../../dialogs/dialogs.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsDesignComponent } from './projects-design/projects-design.component';
import { ProjectsIllustrationComponent } from './projects-illustration/projects-illustration.component';
import { ProjectsUiUxComponent } from './projects-ui-ux/projects-ui-ux.component';

@NgModule({
    declarations: [
        ProjectsComponent,
        ProjectsDesignComponent,
        ProjectsIllustrationComponent,
        ProjectsUiUxComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        DialogsModule,
        LayoutModule,
        ProjectsRoutingModule,
        MatDialogModule,
    ],
})
export class ProjectsModule { }
