import { Component, OnInit, Input, Output, EventEmitter, HostListener } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { faTimesCircle, faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { CodecDocs } from "../../codecDocs";

@Component({
  selector: "app-help-modal",
  templateUrl: "./help-modal.component.html",
  styleUrls: ["./help-modal.component.scss"],
  animations: [
    trigger("fadeIn", [
      state("void", style({ opacity: 0, transform: "scale(0)" })),
      transition("void <=> *", animate("150ms ease-in-out"))
    ])
  ]
})

//Help Modal pop-up
export class HelpModalComponent implements OnInit {
  //Inherited from app
  @Input() displayModal: boolean;
  @Input() codecDocs: CodecDocs; // Codec documentation links
  faTimesCircle = faTimesCircle;
  //fadeState: string = "end";

  //Emit to app
  @Output() displayModalChange = new EventEmitter();

  //Listen for escape key
  @HostListener("document:keyup", ["$event"])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.closeModal();
    }
  }

  constructor() {}

  ngOnInit() {}

  //Close modal
  closeModal() {
    this.displayModal = false;
    this.displayModalChange.emit(this.displayModal);
  }
}
