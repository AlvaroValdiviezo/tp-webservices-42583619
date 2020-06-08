import { Component, OnInit } from '@angular/core';
import { ZodiacoService } from 'src/app/services/zodiaco.service';
import { Zodiaco } from 'src/app/models/zodiaco';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  zodiaco:Zodiaco;
  listaHoroscopo:Array<Zodiaco>
  nac:string;
  signo:string;
  listares:Array<Zodiaco>

  constructor(private zs:ZodiacoService) {
    this.zodiaco=new Zodiaco();
    this.listaHoroscopo=new Array<Zodiaco>();
    this.listares=new Array<Zodiaco>();
   }

  public cargarHoroscopo(sig:string){
    this.zs.listHoros().subscribe(
      (result)=>{
        this.listaHoroscopo=new Array<Zodiaco>();
        this.listaHoroscopo=result;
        this.listares=new Array<Zodiaco>();
        for(var i=0;this.listaHoroscopo.length >= i;i++){
          if(this.listaHoroscopo[i].name.toString()==sig.toString()){
            this.listares[0]=this.listaHoroscopo[i];
          }
          
        }
        })
        console.log(this.listaHoroscopo);
        console.log(this.listares);
      }
  
  public buscarHoroscopo(){
    this.zs.buscHoros(this.nac).subscribe(
      (result)=>{
        this.signo=result;
      }
    )
    console.log(this.signo)
  }

  ngOnInit(): void {
  }

}
