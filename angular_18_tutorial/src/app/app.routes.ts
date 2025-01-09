import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './Components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponentComponent } from './Components/attribute-directive-component/attribute-directive-component.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { IfElseComponent } from './Components/if-else/if-else.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component: AddEmployeeComponent

    },
    {
        path:'data-binding',
        component: DataBindingComponent
    },
    {
        path:'emp-list',
        component: EmployeeListComponent
    },
    {
        path:'structural-dir',
        component:StructuralDirectiveComponent
    },
    {
        path:'attribute-dir',
        component:AttributeDirectiveComponentComponent
    },
    {
        path:'if-else',
        component:IfElseComponent
    }


];
