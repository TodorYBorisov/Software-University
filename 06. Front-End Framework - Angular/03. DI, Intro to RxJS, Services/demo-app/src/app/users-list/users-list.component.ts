import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { User } from '../types/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class UsersListComponent {

  @Input() users: User[] =[];

    //взимане на change detectora
    constructor(private cd: ChangeDetectorRef) {

    }
  
    ngOnChanges() {
      // console.log('Invoked from ngOnChanges');
  
    }
  
    //правим функция която да извиква промените
    refresh() {
      this.cd.detectChanges();
    }
}
