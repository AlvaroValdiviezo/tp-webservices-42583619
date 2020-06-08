import { Component, OnInit } from '@angular/core';
import { Divisas } from 'src/app/models/divisas';
import { DivisasService } from 'src/app/services/divisas.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  divisas : Divisas;
  de:string;
  a:string;
  num:string;

  constructor(private sd:DivisasService) { 
    this.divisas=new Divisas();
  }

  public cargarDivisas(){
    this.sd.listDivisas(this.divisas.from_type,this.divisas.to_type,this.divisas.from_value).subscribe(
      (result)=>{
        this.divisas=new Divisas();
        this.divisas =result;

        },
        (error)=>{alert("error")}
        )
        console.log(this.divisas);
      }
    

  ngOnInit(): void {
  }

}
