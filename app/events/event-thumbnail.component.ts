/**
 * Created by Kirk.Clawson on 2/4/2017.
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "event-thumbnail",
    templateUrl: "app/events/event-thumbnail.component.html"
})
export class EventThumbnailComponent {
    @Input() event : any;

    logFoo() {
        console.log("foo");
    }
}