import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { EmployeeLoginComponent } from './employee-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [EmployeeLoginComponent],
    imports: [ 
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule
     ],
    exports: [],
    providers: [EmployeeService],
})
export class EmployeeModule {}