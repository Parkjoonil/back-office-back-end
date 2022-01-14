import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IProjectDTO } from 'src/interface/dtos/project.dto';
import { ProjectService } from './project.service';

@Controller()
@ApiTags('프로젝트')
export class ProjectController {

    constructor(
        private projectService: ProjectService
    ) {

    }

    @Get()
    @ApiOperation({
        summary: '프로젝트 정보 조회',
        description: '프로젝트 리스트를 조회합니다.'
    })
    async getProject(): Promise<IProjectDTO.Response.Project[]>{
       
        const projects = await this.projectService.getProjects();

        return projects
    }

}
