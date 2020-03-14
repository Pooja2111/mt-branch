import { Component, OnInit } from '@angular/core';
import { Ipos } from '../ipos';
import { IposService } from '../ipos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useripolist',
  templateUrl: './useripolist.component.html',
  styleUrls: ['./useripolist.component.css']
})
export class UseripolistComponent implements OnInit {
  iposlist: any;

  constructor(private iposservice: IposService,private router:Router) { }

  ngOnInit() {
    this.iposservice.getAllipos().subscribe(data => {
      this.iposlist = data;
     })
  }
  deleteIpos(ipos:Ipos)
  {
     this.iposservice.deleteipos(ipos.id).subscribe(data=>{
     this.iposservice.getAllipos().subscribe(data=>{this.iposlist=data;});
    });
    }
    updateIpos(ipos : Ipos ) {
      window.localStorage.removeItem("edit-id");
      window.localStorage.setItem("edit-id", ipos.id.toString());
     
      this.router.navigate(['ipo']);
     
     
     
      }

}

  


