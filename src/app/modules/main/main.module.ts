import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { MainService } from './main.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: MainComponent }
        ]),
        MatCardModule
    ],
    exports: [],
    providers: [MainService],
})
export class MainModule { }