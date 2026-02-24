import { Module } from '@nestjs/common';
import { UtilityService } from './utility.service';

@Module({
    imports: [UtilityModule],
    providers: [UtilityService],
    exports: [UtilityService],
})
export class UtilityModule {}
