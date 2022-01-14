import { IProjectModel, Status } from 'src/interface/models/project.model';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'project' })
export class ProjectEntity extends BaseEntity implements IProjectModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ type: 'enum', enum: Status })
    status: Status;

    @Column({ type: 'date', nullable: true })
    startAt?: Date;

    @Column({ type: 'date', nullable: true })
    endAt?: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
