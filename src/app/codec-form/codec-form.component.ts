import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Codec } from "../../codec";

@Component({
  selector: "app-codec-form",
  templateUrl: "./codec-form.component.html",
  styleUrls: ["./codec-form.component.scss"]
})

//Codec form component (shared by footage-calc and space-calc)
export class CodecFormComponent implements OnInit {
  //Inherited from footage-calc or space-calc componenents
  @Input() codecs: Codec[];
  @Input() currentCodec: Codec;
  @Input() currentResolution: string;
  @Input() currentFrameRate: string;
  resolutions: string[]; // Array of resolution string names for current Codec selection
  framerates: string[]; // Array of framerate string names for current Codec and resolution selection

  //Emit to footage-calc or space-calc components
  @Output() validate: EventEmitter<any> = new EventEmitter();
  @Output() currentCodecChange = new EventEmitter();
  @Output() currentResolutionChange = new EventEmitter();
  @Output() currentFrameRateChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  //Change currentCodec to reflect current user selection and run checks on resolution/framerate selection
  changeCodec(event) {
    //User sets codec back to no selection
    if (event.target.value === "") {
      this.resolutions = [];
      this.framerates = [];
      this.currentResolution = "";
      this.currentFrameRate = "";
      this.currentResolutionChange.emit(this.currentResolution);
      this.currentFrameRateChange.emit(this.currentFrameRate);
    } else {
      //Current code selection
      this.currentCodec = this.codecs.find(codec => codec.name === event.target.value);
      this.currentCodecChange.emit(this.currentCodec);
      //Make array of resolution names from current codec
      this.resolutions = Object.keys(this.currentCodec.resolutions);
      //If resolution was selected, check if new codec has same resolution
      if (this.currentResolution !== "") {
        //If selected resolution not in new resolutions, reset currentResolution and currentFramerate
        if (this.resolutions.indexOf(this.currentResolution) === -1) {
          this.currentResolution = "";
          this.currentResolutionChange.emit(this.currentResolution);
          this.currentFrameRate = "";
          this.currentFrameRateChange.emit(this.currentFrameRate);
        }
      }
      //If framerate was selected and resolution still selected, check if new codec/resolution has same framerate
      if (this.currentFrameRate !== "" && this.currentResolution !== "") {
        //Make array of framerates from current resolution
        this.framerates = Object.keys(
          this.currentCodec.resolutions[this.currentResolution].framerates
        );
        if (this.framerates.indexOf(this.currentFrameRate) === -1) {
          this.currentFrameRate = "";
          this.currentFrameRateChange.emit(this.currentFrameRate);
        }
      }
    }

    this.validate.emit();
  }

  //Change currentResolution to reflect current user selection
  changeResolution(event) {
    //User sets resolution back to no selection
    if (event.target.value === "") {
      this.framerates = [];
      this.currentResolution = "";
      this.currentFrameRate = "";
      this.currentResolutionChange.emit(this.currentResolution);
      this.currentFrameRateChange.emit(this.currentFrameRate);
    } else {
      //Current resolution selection
      this.currentResolution = event.target.value;
      this.currentResolutionChange.emit(this.currentResolution);
      //Make array of framerate names from current resolution
      this.framerates = Object.keys(
        this.currentCodec.resolutions[this.currentResolution].framerates
      );
      //If framerate was selected and resolution still selected, check if new codec/resolution has same framerate
      if (this.currentFrameRate !== "") {
        if (this.framerates.indexOf(this.currentFrameRate) === -1) {
          this.currentFrameRate = "";
          this.currentFrameRateChange.emit(this.currentFrameRate);
        }
      }
    }

    this.validate.emit();
  }

  //Change currentFramerate to reflect current user selection
  changeFramerate(event) {
    this.currentFrameRate = event.target.value;
    this.currentFrameRateChange.emit(this.currentFrameRate);
    this.validate.emit();
  }
}
