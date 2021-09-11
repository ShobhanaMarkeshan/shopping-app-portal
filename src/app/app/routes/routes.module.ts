import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';


@NgModule({
    declarations: [
        RoutesComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [
        RoutesComponent
    ]
})
export class RoutesModule { }
