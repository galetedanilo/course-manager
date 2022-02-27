import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReplacePipe } from "./replace.pipe";

@NgModule({
    declarations: [
        ReplacePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ReplacePipe
    ]
})
export class AppPipeModule {

}