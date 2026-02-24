import { Controller, Get } from '@nestjs/common';
import { YourinfoService } from './yourinfo.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';


@Controller('yourinfo')
export class YourinfoController {
    constructor(private readonly YourinfoService: YourinfoService,
                private readonly utilityService: UtilityService,
                private readonly globalhelperService: GlobalHelperService
    ) {}

    @Get()
        getJson() {
        return this.YourinfoService.getJson();
        }

        @Get('/shared')
        sharedFunc(): string{
            return this.utilityService.shareFunc();
        }

        @Get('/global')
        globalfunc(): string{
            return this.globalhelperService.globalFunc();
        }

    // @Get('/productFunc')
    // productFunc(): string {
    //     return this.YourinfoService.productFunc();
    // }
}
