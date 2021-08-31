import { Injectable } from '@nestjs/common';
// import { DemoType } from '@shared/types';

@Injectable()
export class AppService {
  getDemoData(): any[] {
    return [
	    {
	    	id: 1,
		    name: 'Name 1'
	    },
	    {
	    	id: 2,
		    name: 'Name 2'
	    }
    ];
  }
}
