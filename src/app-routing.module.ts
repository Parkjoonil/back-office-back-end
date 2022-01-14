import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { MenuModule } from './menu/menu.module';
import { ProjectModule } from './project/project.module';

const routes: Routes = [
    {
        path: 'menu',
        module: MenuModule
    },
    {
        path: 'project',
        module: ProjectModule
    },
];

@Module({
    imports: [
        RouterModule.register(routes),
        MenuModule,
        ProjectModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
