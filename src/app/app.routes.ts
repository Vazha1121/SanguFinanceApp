import { Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: "", component: HomeComponent, canActivate: [AuthGuard]},
    {path: "auth", component: AuthorizationComponent},
    {path: "home", component: HomeComponent},
    { path: '**', redirectTo: '/auth', pathMatch: 'full' }
];
