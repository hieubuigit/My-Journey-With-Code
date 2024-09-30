import { ApplicationConfig } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'routing',
    component: '',
  }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
