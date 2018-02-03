import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignModule } from '../design/design.module';

// Components
import { HeaderComponent } from './header/header.component';
import { SidenavNavigationComponent } from './sidenav-navigation/sidenav-navigation.component';


const COMPONENTS = [
  HeaderComponent,
  SidenavNavigationComponent,
];

@NgModule({
  imports: [
    CommonModule,
    DesignModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class CoreModule { }
