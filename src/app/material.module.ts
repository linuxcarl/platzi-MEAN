import {NgModule} from '@angular/core';
import {MatToolbarModule, MatIconModule,MatCardModule,MatInputModule,MatButtonModule, MatFormFieldModule, MatListModule} from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule
];
@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule{}