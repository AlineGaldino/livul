import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDesignComponent } from './projects-design/projects-design.component';
import { ProjectsIllustrationComponent } from './projects-illustration/projects-illustration.component';
import { ProjectsUiUxComponent } from './projects-ui-ux/projects-ui-ux.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    },
    {
        path: 'design',
        component: ProjectsDesignComponent,
    },
    {
        path: 'illustration',
        component: ProjectsIllustrationComponent,
    },
    {
        path: 'ui',
        component: ProjectsUiUxComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }
