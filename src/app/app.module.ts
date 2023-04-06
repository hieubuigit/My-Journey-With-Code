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
import { UsePipesComponent } from './5-pipes/use-pipes/use-pipes.component';
import { GreetingPipePipe } from './custom-pipes/greeting-pipe.pipe';
import { PropertyBindingComponent } from './6-property-binding/property-binding/property-binding.component';
import { AttrClassStyleComponent } from './7-attr-class-style/attr-class-style/attr-class-style.component';
import { EventBindingComponent } from './8-event-binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './9-two-way-binding/two-way-binding/two-way-binding.component';
import { ResizeComponentComponent } from './9-two-way-binding/resize-component/resize-component.component';
import { TemplateVariableComponent } from './10-template-variable/template-variable/template-variable.component';
import { DirectivesComponent } from './11-Directives/directives/directives.component';
import { FormsModule } from '@angular/forms';
import { LearnAttrDirectiveComponent } from './12-attribute-directive/learn-attr-directive/learn-attr-directive.component';
import { HightLightDirective } from './12-attribute-directive/learn-attr-directive/hightlight.directive';
import { StructureDirectiveComponent } from './13-structure-directive/structure-directive/structure-directive.component';
import { DependenceInjectionComponent } from './14-dependence-injection/dependence-injection/dependence-injection.component';
import { RoutingComponent } from './15-routing/routing/routing.component';
import { ChildAComponent } from './15-routing/routing/child-a/child-a.component';
import { ChildBComponent } from './15-routing/routing/child-b/child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ChildComComponent,
    ParentComComponent,
    SetStyleComponent,
    LearnNgContentComponent,
    TemplateStatementComponent,
    UsePipesComponent,
    GreetingPipePipe,
    PropertyBindingComponent,
    AttrClassStyleComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    ResizeComponentComponent,
    TemplateVariableComponent,
    DirectivesComponent,
    LearnAttrDirectiveComponent,
    HightLightDirective,  // This is directive from section 12
    StructureDirectiveComponent,
    DependenceInjectionComponent,
    RoutingComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule, // Use routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
