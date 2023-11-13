import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "main-detail",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"],
})
export class MainComponent {
    detail: any = {};

    constructor(private http: HttpClient, private route: ActivatedRoute) {}
    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const showIdString = params.get("id");
            console.log(showIdString);
            if (showIdString) {
                const showId = parseInt(showIdString);
                this.http
                    .get("https://api.tvmaze.com/shows/" + showId)
                    .subscribe((data: any) => {
                        console.log(data);
                        this.detail = data;
                    });
            }
        });
    }
}
