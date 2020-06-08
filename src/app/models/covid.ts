export class Covid {
    confirmed:string;
    recovered:string;
    deaths:string;
    active:string;

    Covid(confirmed?:string,recovered?:string,deaths?:string,active?:string){
        this.confirmed=confirmed;
        this.recovered=recovered;
        this.deaths=deaths;
        this.active=active;
    }

}
