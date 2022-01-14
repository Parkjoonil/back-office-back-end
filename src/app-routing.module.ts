import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { MenuModule } from './menu/menu.module';
import { ProjectModule } from './project/project.module';
import { ShareidModule } from './shareid/shareid.module';

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
];

@Module({
    imports: [
        RouterModule.register(routes),
        MenuModule,
        ProjectModule,
        ShareidModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
