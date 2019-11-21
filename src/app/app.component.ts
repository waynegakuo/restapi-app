import { Component, OnInit } from '@angular/core';
import { UserService} from './services/user.service';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'REST API App';
  name = 'by Wayne Gakuo';
  users: User[];

  constructor( private service: UserService) {}
  ngOnInit() {
    return this.service.getUsers().subscribe(data => { this.users = data; });
}
}
