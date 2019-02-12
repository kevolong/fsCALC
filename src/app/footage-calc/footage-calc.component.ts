import { Component, OnInit, Input } from "@angular/core";
import { Codec } from "../../codec";
import { DataCalculateService } from "../data-calculate.service";

@Component({
  selector: "app-footage-calc",
  templateUrl: "./footage-calc.component.html",
  styleUrls: ["./footage-calc.component.scss"]
})

//Footage -> Size Component
export class FootageCalcComponent implements OnInit {
  @Input() codecs: Codec[];
  currentCodec: Codec;
  currentResolution: string;
  currentFrameRate: string;
  currentHours: number;
  currentMinutes: number;
  displayResult: boolean;
  footageSize: object;

  constructor(private dataCalcService: DataCalculateService) {}

  ngOnInit() {
    this.currentResolution = "";
    this.currentFrameRate = "";
    this.currentHours = 1;
    this.currentMinutes = 0;
    this.displayResult = false;
  }

  //Calculate if ready.
  checkForm() {
    let ready = false;
    if (this.currentHours > 0 || this.currentMinutes > 0) {
      if (this.currentCodec && this.currentResolution !== "" && this.currentFrameRate !== "") {
        ready = true;
      }
    }
    if (ready) {
      this.footageSize = this.dataCalcService.calculateFootageSize(
        this.currentHours,
        this.currentMinutes,
        this.currentCodec.resolutions[this.currentResolution]["framerates"][this.currentFrameRate]
          .datarate
      );
      this.displayResult = true;
    } else {
      this.displayResult = false;
    }
  }
}
