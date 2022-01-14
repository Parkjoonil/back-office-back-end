import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { MenuModule } from './menu/menu.module';

const routes: Routes = [
    {
        path: 'menu',
        module: MenuModule
    },
];

@Module({
    imports: [
        RouterModule.register(routes),
        MenuModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
