import { Component, OnInit } from "@angular/core";
import { DataCalculateService } from "../data-calculate.service";

@Component({
  selector: "app-custom-calc",
  templateUrl: "./custom-calc.component.html",
  styleUrls: ["./custom-calc.component.scss"]
})

//Custom Bitrate component
export class CustomCalcComponent implements OnInit {
  currentHours: number;
  currentMinutes: number;
  currentBitrate: number;
  currentUnit: string;
  displayResult: boolean;
  footageSize: object;

  constructor(private dataCalcService: DataCalculateService) {}

  ngOnInit() {
    this.currentHours = 1;
    this.currentMinutes = 0;
    this.currentBitrate = 10;
    this.displayResult = false;
    this.currentUnit = "Mbps";
    this.checkForm();
  }

  changeUnit(event) {
    this.currentUnit = event.target.value;
    this.checkForm();
  }

  //Check if ready to calculate
  checkForm() {
    let ready = false;
    if (this.currentHours > 0 || this.currentMinutes > 0) {
      if (this.currentBitrate > 0) {
        ready = true;
      }
    }
    if (ready) {
      //Convert to Mbps if necessary
      let customBitrate: number = this.currentBitrate;
      if (this.currentUnit === "Gbps") {
        customBitrate *= 1000;
      }
      this.footageSize = this.dataCalcService.calculateFootageSize(
        this.currentHours,
        this.currentMinutes,
        customBitrate
      );
      this.displayResult = true;
    } else {
      this.displayResult = false;
    }
  }
}
