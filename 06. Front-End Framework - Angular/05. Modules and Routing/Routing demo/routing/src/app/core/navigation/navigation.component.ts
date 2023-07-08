import { Component } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  // constructor(private router: Router) { }

  //1 Вариант: това е рутиране с функция при клик
  // navigateTo(path: string): void {
  //   this.router.navigate([path])
  // }

  //2 Вариант: Трябва да импортнем RouterModule в core.module.ts

}
