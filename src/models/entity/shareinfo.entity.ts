import { IShareinfoModel } from 'src/interface/models/shareinfo.model';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'shareinfo' })
export class ShareinfoEntity extends BaseEntity implements IShareinfoModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    information: string;

    @Column({ nullable: false })
    color: string;

    @Column({ nullable: false })
    type: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}