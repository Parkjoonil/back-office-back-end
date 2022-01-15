import { IMenuModel } from 'src/interface/models/menu.model';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, OneToMany, PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { MenuDetailEntity } from './menu-detail.entity';

@Entity({ name: 'menu' })
export class MenuEntity extends BaseEntity implements IMenuModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @Column({ nullable: false })
    icon: string;

    @OneToMany(() => MenuDetailEntity, detail => detail.menu)
    details: MenuDetailEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
