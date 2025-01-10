import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './Components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponentComponent } from './Components/attribute-directive-component/attribute-directive-component.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { IfElseComponent } from './Components/if-else/if-else.component';
import { ForSwitchComponent } from './Components/for-switch/for-switch.component';
import { PipeComponentComponent } from './Components/pipe-component/pipe-component.component';
import { TempletFormComponent } from './Components/templet-form/templet-form.component';
import { ReactiveComponent } from './Components/reactive/reactive.component';
import { GetApiComponent } from './Components/get-api/get-api.component';
import { PostApiComponent } from './Components/post-api/post-api.component';

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
    },
    {
        path:'for-switch',
        component:ForSwitchComponent
    },
    {
        path:'pipe-component',
        component:PipeComponentComponent
    },
    {
        path:'template-form',
        component:TempletFormComponent
    },
    {
        path:'reactive',
        component:ReactiveComponent
    },
    {
        path:'get-api',
        component:GetApiComponent
    },
    {
        path:'post-api',
        component:PostApiComponent
    }


];
