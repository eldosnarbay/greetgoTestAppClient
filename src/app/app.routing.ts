import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {PupilComponent} from './component/pupil/pupil.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pupils', component: PupilComponent},

  { path: '**', redirectTo: '/pupils' }
];

export const routing = RouterModule.forRoot(appRoutes);
