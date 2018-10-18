import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileRoutingModule} from './profile.routing.module';
import {JobOpeningComponent} from './job-opening/job-opening.component';
import {JobOpening2Component} from './job-opening2/job-opening2.component';
import {ProfileLayoutComponent} from './profile-layout/profile-layout.component';
import {MdModule} from './md/md.module';
import {
    MatButtonToggleModule,
    MatCheckboxModule, MatDatepickerModule, MatExpansionModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule, MatListModule,
    MatSelectModule,
    MatTooltipModule
} from '@angular/material';
import {SidebarModule} from './sidebar/sidebar.module';
import {FixedpluginModule} from './shared/fixedplugin/fixedplugin.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {StatusElementComponent} from './status-element/status-element.component';
import {InputWithMaxLengthComponent} from './input-with-max-length/input-with-max-length.component';
import {ProfileCardLayoutComponent} from './profile-card-layout/profile-card-layout.component';
import {ProfileCardNavigationComponent} from './profile-card-navigation/profile-card-navigation.component';
import {JobOpening3Component} from './job-opening3/job-opening3.component';
import {JobOpening4Component} from './job-opening4/job-opening4.component';
import {JobOpening5Component} from './job-opening5/job-opening5.component';
import {JobOpening6Component} from './job-opening6/job-opening6.component';
import {JobOpening7Component} from './job-opening7/job-opening7.component';
import {JobOpening8Component} from './job-opening8/job-opening8.component';
import {JobBoardComponent} from './job-board/job-board.component';
import {CandidatePopupComponent} from './candidate-popup/candidate-popup.component';
import {CloseJobPopupComponent} from './close-job-popup/close-job-popup.component';
import {InterviewSectionComponent} from './interview-section/interview-section.component';
import {SchedulePopupComponent} from './schedule-popup/schedule-popup.component';
import {RemoveInterviewPopupComponent} from './remove-interview-popup/remove-interview-popup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AreaFilterPipe } from './pipes/area-filter.pipe';
import { TechnologiesFilterPipe } from './pipes/technologies-filter.pipe';
import { JobOpeningPipe } from './pipes/job-opening.pipe';
import { PlusFlyingComponent } from './plus-flying/plus-flying.component';
import { InterviewPipe } from './pipes/interview.pipe';
import {MatDatetimepickerModule} from '@mat-datetimepicker/core';
import {MatMomentDatetimeModule} from '@mat-datetimepicker/moment';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        MdModule,
        MatTooltipModule,
        SidebarModule,
        FixedpluginModule,
        FooterModule,
        NavbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonToggleModule,
        ReactiveFormsModule,
        FormsModule,
        MatExpansionModule,
        MatListModule,
        MatIconModule,
        MatDatepickerModule,
        MatMomentDatetimeModule,
        MatDatetimepickerModule
    ],
    declarations: [
        DashboardComponent,
        ProfileLayoutComponent,
        StatusElementComponent,
        InputWithMaxLengthComponent,
        ProfileCardLayoutComponent,
        ProfileCardNavigationComponent,
        JobOpeningComponent,
        JobOpening2Component,
        JobOpening3Component,
        JobOpening4Component,
        JobOpening5Component,
        JobOpening6Component,
        JobOpening7Component,
        JobOpening8Component,
        JobBoardComponent,
        InterviewSectionComponent,
        CandidatePopupComponent,
        CloseJobPopupComponent,
        SchedulePopupComponent,
        RemoveInterviewPopupComponent,
        PlusFlyingComponent,
        AreaFilterPipe,
        TechnologiesFilterPipe,
        JobOpeningPipe,
        InterviewPipe
    ],
    entryComponents: [
        CandidatePopupComponent,
        CloseJobPopupComponent,
        SchedulePopupComponent,
        RemoveInterviewPopupComponent
    ]
})
export class ProfileModule {
}
