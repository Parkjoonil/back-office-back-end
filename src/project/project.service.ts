import { Injectable } from '@nestjs/common';
import { ProjectEntity } from 'src/models/entity/project.entity';

@Injectable()
export class ProjectService {

    async getProjects(): Promise<ProjectEntity[]> {
        const projects = await ProjectEntity.find();

        return projects;
    }
}
