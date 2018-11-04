import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { APP_ROUTING } from '../app.routes';
import { from } from 'rxjs';
import { HeaderComponent } from '../shared/component-global/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModules } from '../pipe/pipe.module';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatNativeDateModule,
  MAT_DATE_FORMATS
} from '@angular/material';
import { ValidationService } from './services/validation.service';
import { FooterComponent } from '../shared/component-global/footer/footer.component';
import { AlumniComponent } from './menu/alumni/alumni.component';
import { AlumnoComponent } from './menu/alumno/alumno.component';
import { AdminComponent } from './menu/admin/admin.component';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    PipeModules,
    ReactiveFormsModule,
    APP_ROUTING
    
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AlumniComponent,
    AlumnoComponent,
    AdminComponent
  ],
  exports:[
    LoginComponent,
    HeaderComponent,
    MenuComponent
  ],
  providers: [ValidationService]
})
export class IdentityModel { }
