import { Injectable } from '@nestjs/common';

@Injectable()
export class YourinfoService {
    getJson(){
        return {
            name: "ThuTaZaw",
            age: 20,
            hobby: "playing badminton"
        };
    }
}
