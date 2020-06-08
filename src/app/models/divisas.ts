export class Divisas {
    from_type:string;
    to_type:string;
    from_value:string;
    result:string;

    divisas(from_type?:string,to_type?:string,from_value?:string,result?:string){
        this.from_type=from_type;
        this.to_type=to_type;
        this.from_value=from_value;
        this.result=result;
    }
}
