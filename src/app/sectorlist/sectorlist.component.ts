import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Observable } from 'rxjs';
import { Sector } from '../sector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectorlist',
  templateUrl: './sectorlist.component.html',
  styleUrls: ['./sectorlist.component.css']
})
export class SectorlistComponent implements OnInit {

  constructor(private sectorservice: SectorService,private router:Router) { }
  sectorlist: Observable<Sector[]>;

  ngOnInit() {
    this.sectorservice.getAllsector().subscribe(data => {
      this.sectorlist = data;
     })
  }
  deleteSector(sector:Sector)
  {
     this.sectorservice.deleteSector(sector.id).subscribe(data=>{
     this.sectorservice.getAllsector().subscribe(data=>{this.sectorlist=data;});
    });
    }
    updateSector(sector : Sector ) {
      window.localStorage.removeItem("edit-id");
      window.localStorage.setItem("edit-id", sector.id.toString());
     
      this.router.navigate(['sector']);
     
     
     
      }
  }
  


