import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidnavComponent } from './sidnav/sidnav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidnavComponent,

    ],
    imports: [
        FontAwesomeModule,
        CommonModule,
        RouterModule,
        MatSidenavModule,
        MatButtonModule,
        MatExpansionModule,
        MatCardModule
    ],
    providers: [],
    exports: [
        LayoutComponent,
        HeaderComponent,
        SidnavComponent,
    ]

})
export class LayoutModule { }
