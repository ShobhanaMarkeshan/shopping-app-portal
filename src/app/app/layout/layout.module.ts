import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidnavComponent } from './sidnav/sidnav.component';
@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidnavComponent,
    ],
    imports: [
        FontAwesomeModule,
        MatSidenavModule,
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports: [
        LayoutComponent,
        HeaderComponent,
        SidnavComponent
    ]

})
export class LayoutModule { }
