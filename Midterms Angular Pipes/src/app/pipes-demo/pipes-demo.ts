import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe,SlicePipe, AsyncPipe,DecimalPipe, TitleCasePipe, KeyValuePipe, PercentPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})

export class PipesDemo {
   presentDate = new Date();
   price = 20000;
   Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
   time$ = interval(1000)
   .pipe(map(val => new Date()));

   decimalNum1: number = 8.7589623;
   decimalNum2: number = 5.43;

   title = 'Angular Pipes';

   Student = {
    name: 'Krisean Tienzo',
    age: '20 years old',
    Year: 'Third Year',
    course: 'Bachelor of Science in Information Technology Major in Web Development',
  };

  num1: number = 2.5;
  num2: number = 0.5;
}
