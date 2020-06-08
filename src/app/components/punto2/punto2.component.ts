import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  categoria:string ;
  noticia:Noticia;
  listaNot: Array<Noticia>;

  constructor(private ns:NoticiaService) {
    this.noticia=new Noticia();
    this.listaNot=new Array<Noticia>();
   }
  public cargarNoticias(){
    this.ns.listNoticias(this.categoria).subscribe(
      (result)=>{
        this.listaNot=new Array<Noticia>();
        result['arts'].forEach(element => {
          this.noticia=new Noticia();
          Object.assign(this.noticia,element)
          this.listaNot.push(this.noticia);
        });
        console.log(this.listaNot);
      }
    )
  }

  ngOnInit(): void {
  }

}
