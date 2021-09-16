import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { HomeComponent } from './home/home.component';
import { ViewItemComponent } from './viewItem/view-item.component';
import { FontFormatPipe } from '../pipe/font-format.pipe';


@NgModule({
    declarations: [
        RoutesComponent,
        HomeComponent,
        ViewItemComponent,
        FontFormatPipe

    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [
        RoutesComponent,
        FontFormatPipe
    ]
})
export class RoutesModule { }
