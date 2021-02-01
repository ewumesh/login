import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'login', loadChildren: () => import('./modules/authentication/login/login.module'). then(r => r.LoginModule)},
    {path: 'signup', loadChildren: () => import('./modules/authentication/sign-up/sign-up.module'). then(r => r.SignUpModule)},
    {path: 'main', loadChildren: () => import('./modules/main/main.module'). then(r => r.MainModule)},
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
