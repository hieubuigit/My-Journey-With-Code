import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { ChildComComponent } from './1-comunication-components/child-com/child-com.component';
import { ParentComComponent } from './1-comunication-components/parent-com/parent-com.component';
import { SetStyleComponent } from './2-set-style/set-style/set-style.component';
import { LearnNgContentComponent } from './3-ng-content/learn-ng-content/learn-ng-content.component';
import { TemplateStatementComponent } from './4-template-statement/template-statement/template-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ChildComComponent,
    ParentComComponent,
    SetStyleComponent,
    LearnNgContentComponent,
    TemplateStatementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
