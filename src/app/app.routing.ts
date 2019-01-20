import {Routes, RouterModule} from "@angular/router";
import { QuestionsListComponent } from "./questions/questions-list/questions-list.component";
import { SinginComponent } from "./singin/singin.component";
import { RegisterComponent } from "./register/register.component";
//importamos las rutas locales de questions.
import { QUESTION_ROUTES } from "./questions/questions.routing";

const APP_ROUTES: Routes = [
    {path:'', component: QuestionsListComponent, pathMatch:'full'},
    {path:'signin',component:SinginComponent},
    {path:'register',component:RegisterComponent},
    {path:'questions',children: QUESTION_ROUTES}//implementamos las rutas de questions
];
export const Routing = RouterModule.forRoot(APP_ROUTES);