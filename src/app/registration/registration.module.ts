import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, SharedModule } from '../shared';

//import { EditableRegistrationResolver } from './editable-registration-resolver.service';
import { RegistrationSubscriptionTypeComponent } from './registration-subscription.component'

const registrationRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'registration',
        component: RegistrationSubscriptionTypeComponent,
        canActivate: [AuthGuard]
    },    
    {
        path: 'registration/:slug',
        component: RegistrationSubscriptionTypeComponent,
        canActivate: [AuthGuard] //,
        // resolve: {
        //     registration: 
        // }
    }
]);

@NgModule({
    imports:[
        registrationRouting,
        SharedModule
    ],
    declarations: [
        RegistrationSubscriptionTypeComponent
    ],
    providers: [

    ]
})

export class RegistrationModule{}