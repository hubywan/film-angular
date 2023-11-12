import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "detail-home",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"],
})
export class DetailComponent {
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
