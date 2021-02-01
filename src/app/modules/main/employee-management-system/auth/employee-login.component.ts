import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';

import { GenericValidator } from '../../../../shred/validations/generic-validators';

@Component({
    templateUrl: './employee-login.component.html',
    styleUrls: ['./employee.scss']
})
export class EmployeeLoginComponent implements OnInit, AfterViewInit {

    employeeForm: FormGroup;
    genericValidator: GenericValidator;
    displayMessage: any = {};
    @ViewChildren(FormControlName, { read: ElementRef })
    private formInputElements: ElementRef[];

    constructor(
        private fb: FormBuilder
    ) {
        this.genericValidator = new GenericValidator({
            'userName': {
                'required': 'This field is required.'
            },

            'password': {
                'required': 'This field is required.'
            }
        });
     }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.employeeForm = this.fb.group({
            id: 0,
            userName: [null, Validators.required],
            password: [null, Validators.required]
        });
    }

    ngAfterViewInit() {
        this.validation();
    }

    private validation() {
        this.genericValidator
            .initValidationProcess(this.employeeForm, this.formInputElements)
            .subscribe({ next: m => this.displayMessage = m });
    }

    login() {

    }

}
