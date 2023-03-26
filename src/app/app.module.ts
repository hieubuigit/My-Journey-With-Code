import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { ChildComComponent } from './1-comunication-components/child-com/child-com.component';
import { ParentComComponent } from './1-comunication-components/parent-com/parent-com.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ChildComComponent,
    ParentComComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
