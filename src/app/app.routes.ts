import { Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "profile", component: UserProfileComponent },
];
