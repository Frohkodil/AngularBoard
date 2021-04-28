import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateScrumComponent } from './_template/template-scrum/template-scrum.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { HttpClientModule} from '@angular/common/http';
import {DataService} from './_service/data.service';
import { TemplateLoginComponent } from './_template/template-login/template-login.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LoginComponent } from './login/login.component';
import {appRoutingModule} from './app.routing';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateScrumComponent,
    TemplateHeaderComponent,
    TemplateLoginComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    appRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
