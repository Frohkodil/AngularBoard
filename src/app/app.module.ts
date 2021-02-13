import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateScrumComponent } from './_template/template-scrum/template-scrum.component';
import { TemplateScrumFormComponent } from './_template/template-scrum-form/template-scrum-form.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateScrumComponent,
    TemplateScrumFormComponent,
    TemplateHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
