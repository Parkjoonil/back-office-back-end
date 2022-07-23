import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { CalendarModule } from './calendar/calendar.module';
import { MenuModule } from './menu/menu.module';
import { ProjectModule } from './project/project.module';
import { ShareidModule } from './shareid/shareid.module';
import { ShareinfoModule } from './shareinfo/shareinfo.module';
import { EmployeeModule } from './employee/employee.module';

const routes: Routes = [
    {
        path: 'menu',
        module: MenuModule
    },
    {
        path: 'project',
        module: ProjectModule
    },
    {
        path: 'shareid',
        module: ShareidModule
    },
    {
        path: 'shareinfo',
        module: ShareinfoModule
    },
    {
        path: 'calendar',
        module: CalendarModule
    },
    {
        path: 'employee',
        module: EmployeeModule
    },

    
];

@Module({
    imports: [
        RouterModule.register(routes),
        MenuModule,
        ProjectModule,
        ShareidModule,
        ShareinfoModule,
        EmployeeModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
