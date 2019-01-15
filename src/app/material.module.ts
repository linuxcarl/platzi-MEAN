import {NgModule} from '@angular/core';
import {MatToolbarModule, MatIconModule,MatCardModule,MatInputModule,MatButtonModule, MatFormFieldModule} from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
];
@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule{}