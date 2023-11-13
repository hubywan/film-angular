import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "episode-detail",
    templateUrl: "./episode.component.html",
    styleUrls: ["./episode.component.css"],
})
export class EpisodeComponent {
    episodes: any = [];
    id: string;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
        this.id = this.route.snapshot.params["id"];
    }
    ngOnInit(): void {
        this.http
            .get("https://api.tvmaze.com/shows/" + this.id + "/episodes")
            .subscribe((data: any) => {
                console.log(data);
                this.episodes = data;
            });
    }
}
