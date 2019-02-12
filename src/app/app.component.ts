import { Component } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import { CodecDataService } from "./codec-data.service";
import { Codec } from "../codec";
import { CodecData } from "../codecData";
import { CodecDocs } from "../codecDocs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("fadeIn", [
      state("start", style({ opacity: 0 })),
      state("end", style({ opacity: 1 })),
      transition("start => end", animate("500ms ease-in-out"))
    ])
  ]
})
export class AppComponent {
  mode: string; //Calculator mode: "footage" or "space"
  codecs: Codec[] = []; // Codec data
  codecDocs: CodecDocs; // Codec documentation
  codecData: CodecData;
  state: string = "start";
  loading: boolean = true; // Loading animation
  faQuestionCircle = faQuestionCircle;
  displayModal: boolean = false;

  constructor(private codecDataService: CodecDataService) {
    this.mode = "footage";
  }

  //Fetch codecs data
  getCodecs(): void {
    this.codecDataService.getCodecs().subscribe(
      data => {
        this.codecData = {
          codec_families: data["codec_families"],
          codec_docs: data.codec_docs
        };
      },
      err => console.log(err),
      () => {
        //Sort by codec family name
        const families = [...this.codecData.codec_families];
        families.sort((a, b) => (a.family.toUpperCase() < b.family.toUpperCase() ? -1 : 1));
        //Push each families codecs to this.codecs
        for (let i = 0; i < families.length; i++) {
          families[i].codecs.forEach(codec => this.codecs.push(codec));
        }
        this.codecDocs = this.codecData.codec_docs;
        //console.log(this.codecData.codec_docs);

        //Trigger component fadeIn animate
        this.loading = false;
        this.state = "end";
      }
    );
  }

  ngOnInit() {
    this.getCodecs();
  }

  //Switch between calculator modes
  changeMode(event) {
    this.mode = event.target.value;
  }

  //Show Modal
  showModal() {
    this.displayModal = true;
  }
}
