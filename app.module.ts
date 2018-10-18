import {NgModule} from '@angular/core';

import {AuthModule} from './auth/auth.module';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {ProfileModule} from './profile/profile.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AuthModule,
        ProfileModule,
        RouterModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
