import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent {
    shows: any = [];
    inputTitolo: string = "";
    constructor(private http: HttpClient, private router: Router) {}
    ngOnInit(): void {
        // una get verso un indirizzo che da una risposta
    }
    ricerca() {
        this.http
            .get(" https://api.tvmaze.com/search/shows?q=" + this.inputTitolo)
            .subscribe((data: any) => {
                console.log(data);
                this.shows = data;
            });
    }
    viewDetail(id: number) {
        this.router.navigate(["/detail", id]);
        console.log("Id passato");
        console.log(id);
    }
}
