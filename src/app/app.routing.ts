import {Routes, RouterModule} from "@angular/router";
import { QuestionsListComponent } from "./questions/questions-list/questions-list.component";
import { SinginComponent } from "./singin/singin.component";
import { RegisterComponent } from "./register/register.component";
const APP_ROUTES: Routes = [
    {path:'', component: QuestionsListComponent, pathMatch:'full'},
    {path:'signin',component:SinginComponent},
    {path:'register',component:RegisterComponent}
];
export const Routing = RouterModule.forRoot(APP_ROUTES);