import { RouterModule, Routes } from "@angular/router";
import { CursosComponent } from "./cursos.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: CursosComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule { }