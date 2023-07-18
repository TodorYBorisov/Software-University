import { Directive, Input, OnChanges, Optional, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural'
})
export class MyStructuralDirective implements OnChanges {

  @Input() appMyStructural: boolean = false;
  @Input() myTmpProp:any;

  constructor(
    @Optional()
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.appMyStructural) {

      this.vcRef.createEmbeddedView(this.templateRef, {

        value: 'value from ng on changes 123',
        $implicit: 'this is implicit data'
      })

    } else {

      this.vcRef.clear();
    }

  }

}
