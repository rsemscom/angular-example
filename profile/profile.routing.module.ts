import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {JobOpeningComponent} from './job-opening/job-opening.component';
import {JobOpening2Component} from './job-opening2/job-opening2.component';
import {ProfileLayoutComponent} from './profile-layout/profile-layout.component';
import {JobOpening7Component} from './job-opening7/job-opening7.component';
import {JobOpening8Component} from './job-opening8/job-opening8.component';
import {JobOpening6Component} from './job-opening6/job-opening6.component';
import {JobOpening5Component} from './job-opening5/job-opening5.component';
import {JobOpening4Component} from './job-opening4/job-opening4.component';
import {JobOpening3Component} from './job-opening3/job-opening3.component';
import {JobBoardComponent} from './job-board/job-board.component';
import {InterviewSectionComponent} from './interview-section/interview-section.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: ProfileLayoutComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            }
        ]
    },
    {
        path: 'interview',
        component: ProfileLayoutComponent,
        children: [
            {
                path: '',
                component: InterviewSectionComponent
            }
        ]
    },    {
        path: 'job-board',
        component: ProfileLayoutComponent,
        children: [
            {
                path: '',
                component: JobBoardComponent
            }
        ]
    },
    {
        path: 'job-opening',
        component: ProfileLayoutComponent,
        children: [
            {
                path: 'step1',
                component: JobOpeningComponent
            },
            {
                path: 'step2',
                component: JobOpening2Component
            },
            {
                path: 'step3',
                component: JobOpening3Component
            },
            {
                path: 'step4',
                component: JobOpening4Component
            },
            {
                path: 'step5',
                component: JobOpening5Component
            },
            {
                path: 'step6',
                component: JobOpening6Component
            },
            {
                path: 'step7',
                component: JobOpening7Component
            },
            {
                path: 'step8',
                component: JobOpening8Component
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class ProfileRoutingModule {}
