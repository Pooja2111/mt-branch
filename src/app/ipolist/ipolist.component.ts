import { Component, OnInit } from '@angular/core';
import { IposService } from '../ipos.service';
import { Observable } from 'rxjs';
import { Ipos } from '../ipos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipolist',
  templateUrl: './ipolist.component.html',
  styleUrls: ['./ipolist.component.css']
})
export class IpolistComponent implements OnInit {
 

  constructor(private iposservice: IposService,private router:Router) { }
   
  iposlist: Observable<Ipos[]>;

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
