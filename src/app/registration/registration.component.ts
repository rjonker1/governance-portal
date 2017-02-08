import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router'

import { User, UserService } from '../shared';
import { Registration } from '../shared/models/registration.model'

@Component({
    selector: 'registration-page',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
    constructor(){}

    ngOnInit(){
        
    }
}