import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  p=1
  term: string;
  msg: string;
  details: object;
  status: boolean;
  stat: boolean;
  cc: any;
  id1;
  name1;
  class1;
  add1;
  email1;
  phone1


  constructor(private ht: HttpClient) {
  }

  ngOnInit() {

    this.ht.get("http://localhost:3000/student")
      .subscribe(resp => {
        console.log(resp);
        this.details = resp;
        this.msg = "successfully retrieved";

      }, err => {
        console.log(err);
        this.msg = "please retry....not able to hit API";
      }, () => console.log("success")
      );

  }

  add() {
    this.stat = true;
    this.status = false;
  }
  posting(ca) {
    this.stat = true;
    var obj = {
      id: ca.id22,
      name: ca.name22,
      class: ca.class22,
      add: ca.add22,
      email: ca.email22,
      phone:ca.phone22
    }
    this.stat = false;
   
    
    this.ht.post("http://localhost:3000/student", obj)
      .subscribe(resp => {
        console.log(resp); this.details = resp;
        if (resp) {
          this.ht.get("http://localhost:3000/student").subscribe(resp => { console.log(resp); this.details = resp; });
        }
      });

  }
  edit(ca) {
    this.id1 = ca.id;
    this.name1 = ca.name;
    this.class1 = ca.class;
    this.add1 = ca.add;
    this.email1 = ca.email;
    this.phone1 = ca.phone;
    this.status = true;
    this.stat = false;
  }
  sub(ca) {
    console.log(ca);
    var obj = {
      id: ca.id2,
      name: ca.name2,
      class: ca.class2,
      add: ca.add2,
      email: ca.email2,
      phone: ca.phone2
    }
    this.status = false;
    this.ht.patch("http://localhost:3000/student/" + ca.id2, obj)
      .subscribe(resp => {
        console.log(resp);
        this.details = resp;
        if (resp) {
          this.ht.get("http://localhost:3000/student")
            .subscribe(resp => { console.log(resp); this.details = resp; });
        }
      });

  }
  delete(c) {
    var val = c;
    this.ht.delete("http://localhost:3000/student/" + val)
      .subscribe(resp => {
        console.log(resp)
        if (resp) {
          this.ht.get("http://localhost:3000/student").subscribe(resp => { console.log(resp); this.details = resp; });
        }
      })
  }
}
