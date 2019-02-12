import { Component, OnInit, Input } from "@angular/core";
import { Codec } from "../../codec";
import { DataCalculateService } from "../data-calculate.service";

@Component({
  selector: "app-space-calc",
  templateUrl: "./space-calc.component.html",
  styleUrls: ["./space-calc.component.scss"]
})

//Space -> Size Component
export class SpaceCalcComponent implements OnInit {
  @Input() codecs: Codec[];
  currentCodec: Codec;
  currentResolution: string;
  currentFrameRate: string;
  currentSpace: number;
  currentUnit: string;
  displayResult: boolean;
  footageAmount: object;

  constructor(private dataCalcService: DataCalculateService) {}

  ngOnInit() {
    this.currentResolution = "";
    this.currentFrameRate = "";
    this.currentSpace = 1;
    this.currentUnit = "GB";
    this.displayResult = false;
  }

  changeUnit(event) {
    this.currentUnit = event.target.value;
    this.checkForm();
  }

  //Calculate if ready.
  checkForm() {
    let ready = false;
    if (this.currentCodec && this.currentResolution !== "" && this.currentFrameRate !== "") {
      ready = true;
    }
    if (ready) {
      this.footageAmount = this.dataCalcService.calculateFootageAmount(
        this.currentSpace,
        this.currentUnit,
        this.currentCodec.resolutions[this.currentResolution]["framerates"][this.currentFrameRate]
          .datarate
      );
      this.displayResult = true;
    } else {
      this.displayResult = false;
    }
  }
}
