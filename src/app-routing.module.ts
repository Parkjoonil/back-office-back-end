import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { MenuModule } from './menu/menu.module';
import { ProjectModule } from './project/project.module';
import { ShareidModule } from './shareid/shareid.module';
import { ShareinfoModule } from './shareinfo/shareinfo.module';

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
    
];

@Module({
    imports: [
        RouterModule.register(routes),
        MenuModule,
        ProjectModule,
        ShareidModule,
        ShareinfoModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
