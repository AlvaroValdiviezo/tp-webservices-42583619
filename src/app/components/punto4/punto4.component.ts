import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/models/covid';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  covid:Covid;
  listaCovid:Array<Covid>;
  resultados:Array<any>;
  pais:string;
  res:{'Total Case_text':'','New Cases_text':'','Total Recovered_text':'','Total Deaths_Cases':''};
  

  constructor(private cs:CovidService) {
    this.covid=new Covid();
    this.listaCovid=new Array<Covid>();
    this.resultados=new Array<any>();
    this.cargarTabla();
  }

  public cargarTabla(){
    this.cs.listPaisesC().subscribe(
      (result)=>{
        this.resultados=result;
        
      }
    )
    console.log(this.resultados);
  }
  public buscarPais(){
    this.cs.buscPais(this.pais).subscribe(
      (result)=>{
        this.covid.confirmed=result['New Cases_text'];
        this.covid.active=result['Total Cases_text'];
        this.covid.deaths=result['Total Deaths_text'];
        this.covid.recovered=result['Total Recovered_text'];
        
      }
    )
    console.log(this.covid);
  }



  ngOnInit(): void {
  }

}
