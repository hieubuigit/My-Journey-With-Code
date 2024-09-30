import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './15-routing/routing/routing.component';
import { DependenceInjectionComponent } from './14-dependence-injection/dependence-injection/dependence-injection.component';
import { ChildAComponent } from './15-routing/routing/child-a/child-a.component';
import { ChildBComponent } from './15-routing/routing/child-b/child-b.component';
import { YourGuardGuard } from './15-routing/routing/your-guard.guard';

const routes: Routes = [
{ path: 'learn-routing-component/:id',component: RoutingComponent,
  children: [
    { path: "child-a", component: ChildAComponent },
    { path: "child-b", component: ChildBComponent }
  ]
},
{ path: 'learn-dependence-injection', component: DependenceInjectionComponent, canActivate: [YourGuardGuard] },
{ path: "**", component: RoutingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
