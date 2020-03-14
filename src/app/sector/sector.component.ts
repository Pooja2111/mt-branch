import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Sector } from '../sector';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  constructor(private sectorservice:SectorService,private router:Router) { }
  sector : Sector=new Sector();  
  submitted = false;  
  ngOnInit() {
    var sid = window.localStorage.getItem("edit-id")
    if (sid != null && sid != "") {
     this.sectorservice.findOneInAll3(parseInt(sid))
      .subscribe(data => {
       this.sector = data; this.sectorsaveform.setValue(this.sector)
      });
    }
    this.submitted = false;
   }
 sectorsaveform=new FormGroup({  
    id:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),  
    sectorName:new FormControl('',[Validators.required]),  
    brief:new FormControl(),
   
    }); 
    saveSector(saveSector){  
      this.sector=new Sector();  
      this.sector.id=this.Id.value;  
      this.sector.sectorName=this.SectorName.value;  
      this.sector.brief=this.Brief.value;  
     
       this.submitted=true;
      this.save();  

} save() {  
  this.sectorservice.saveSector(this.sector)  
    .subscribe(data => console.log(data), error => console.log(error));  
  this.sector = new Sector(); 
  window.localStorage.removeItem("edit-id");
  this.router.navigate(['home'])  
}  
get Id(){  
  return this.sectorsaveform.get('id');  
}  
get SectorName(){  
  return this.sectorsaveform.get('sectorName');  
}  
get Brief(){  
  return this.sectorsaveform.get('brief');  
}  
saveSectorForm(){  
  this.submitted=false;  
  this.sectorsaveform.reset();  
} 
}