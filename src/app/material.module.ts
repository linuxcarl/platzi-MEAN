import {NgModule} from '@angular/core';
import {MatToolbarModule, MatIconModule,MatCardModule,MatInputModule,MatButtonModule, MatFormFieldModule, MatListModule,MatGridListModule, MatRadioModule} from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule
];
@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule{}