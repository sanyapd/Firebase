import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/templates/home/home.component';
import { FuncionarioAdmComponent } from './components/funcionario/funcionario-adm/funcionario-adm.component';
import { FuncionarioFormComponent } from './components/funcionario/funcionario-form/funcionario-form.component';
import { AppRoutingModule } from './app-routing-module';
import { FuncionarioListaComponent } from './components/funcionario/funcionario-lista/funcionario-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FuncionarioCardsComponent } from './components/funcionario/funcionario-cards/funcionario-cards.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { LoginComponent } from './components/login/login.component';
import { CargoListaComponent } from './components/cargo/cargo-lista/cargo-lista.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FuncionarioAdmComponent,
    FuncionarioFormComponent,
    FuncionarioListaComponent,
    MainNavComponent,
    FuncionarioCardsComponent,
    LoginComponent,
    CargoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    
  
  ],
  providers: [ AngularFireAuth,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
