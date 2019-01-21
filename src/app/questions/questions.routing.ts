import { QuestionsListComponent } from "./questions-list/questions-list.component";
import { QuestionDetailComponent } from "./question-detail/question-detail.component";
import { QuestionsFormComponent } from "./questions-form/questions-form.component";

//exportamos rutas locales solo para path de questions
export const QUESTION_ROUTES = [
    {path:'',component: QuestionsListComponent},
    {path:'new',component:QuestionsFormComponent},
    {path:':id',component: QuestionDetailComponent}
];