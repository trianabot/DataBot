import { Component, OnInit } from '@angular/core';
import { CaterpillarService } from '../../core/caterpillar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  users: any = [];
  constructor( private caterpillar: CaterpillarService, private router: Router) { }

  ngOnInit() {
    this.getusers();
  }

  getusers() {
    this.caterpillar.getallusers().subscribe(data => {
      this.users = data['data'];
      console.log('data',this.users);
    });
  }

  edit(user) {
      //  this.caterpillar.editUser(user).subscribe(data => {
      //    console.log(data);

      //  });
      let payload: {queryParams: {user: string}};

      payload = {
        queryParams: {
            user: JSON.stringify(user),
        }
    }
      this.router.navigate(['/add-user'], payload)
  }

}
