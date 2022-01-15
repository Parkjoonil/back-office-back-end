import { IMenuDetailModel } from 'src/interface/models/menu-detail.model';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, ManyToOne, PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { MenuEntity } from './menu.entity';

@Entity({ name: 'menu-detail' })
export class MenuDetailEntity extends BaseEntity implements IMenuDetailModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    name: string;

    @Column({ nullable: false})
    url: string;

    @ManyToOne(() => MenuEntity, menu => menu.details)
    menu: MenuEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
