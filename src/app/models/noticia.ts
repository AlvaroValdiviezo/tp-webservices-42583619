export class Noticia {
    id: number;
    seo:string;
    tit:string;
    con:string;
    img:string;

    Noticia(id?:number,seo?:string,tit?:string,con?:string,img?:string){
        this.id=id;
        this.seo=seo;
        this.tit=tit;
        this.con=con;
        this.img=img;
    }
}
