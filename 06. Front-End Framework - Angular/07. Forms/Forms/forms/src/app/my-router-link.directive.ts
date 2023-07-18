import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Route, Router } from '@angular/router';

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyRouterLinkDirective implements OnInit {

  //за да взмем стойноста/login трябва да се направи импут
  @Input() appMyRouterLink: string = '';

  constructor(
    private elRef: ElementRef,
    private rendered: Renderer2,
    private router: Router) { }

  ngOnInit(): void {

    this.rendered.listen(
      this.elRef.nativeElement,
      'click',
      this.clickHandler.bind(this)
    )
  }

  clickHandler(event: MouseEvent) {
    console.log(this.appMyRouterLink);
    this.router.navigate([this.appMyRouterLink]) //така ще може да навигираме м/у отделните вюта

  }

}
