import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { angularMath } from 'angular-ts-math';

@Component({
  selector: 'app-array-ex',
  templateUrl: './array-ex.component.html',
  styleUrls: ['./array-ex.component.scss']
})
export class ArrayExComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  array: Array<number> = []
  arr2: Array<number> = []
  arr3: Array<number> = []
  arr4: Array<number> = []
  arr5: Array<number> = []
  avg: number
  aux: number = 0

  gerarArray(){
    for(let i = 0; i < 5; i++){
      this.array[i] = angularMath.getIntegerRandomRange(1, 1000);
    }
    document.getElementById('ex1').innerHTML = this.array.join(', ')
    document.getElementById('ex2').innerHTML = this.array[0].toString();
  }

  arrayMenosUltimo(){
    for(let i = 0; i < 5; i++){
      this.arr2[i] = this.array[i];
    }
    this.arr2.pop();
    document.getElementById('ex3').innerHTML = this.arr2.join(', ');

  }

  order(){
    this.arr3 = this.array.sort((a: number, b: number) => a - b);
    document.getElementById('ex4').innerHTML = this.arr3.join(', ');
    this.arr4 = this.array.sort((a: number, b: number) => b - a);
    document.getElementById('ex4b').innerHTML = this.arr4.join(', ');
  }

  

  raiz(){
    for(let i = 0; i < 5; i++){
      this.arr5[i] = angularMath.nearOfNumber(angularMath.squareOfNumber(this.array[i]));
    }
    document.getElementById('ex5').innerHTML = this.arr5.join(', ');
  }

  media(){
    for(let i = 0; i < 5; i++){
      this.aux = this.array[i] + this.aux;
    }
    this.avg = this.aux / this.array.length;
    document.getElementById('ex6').innerHTML = this.avg.toString();

  }



  run(){

    this.gerarArray();
    this.arrayMenosUltimo();
    this.order();
    this.raiz()
    this.media()



   
    // console.log(this.array + " Exercicio 1")
    // console.log(this.array[0] + " Exercicio 2")
    // console.log(this.arr2 + " Exercicio 3")
    // console.log(this.arr3 + " Exercicio 4")
    // console.log(this.arr4 + " Exercicio 4b")
    // console.log(this.arr5+ " Exercicio 5");
    // console.log(this.avg + " Exercicio 6");

    this.array = [];

  }

  goBack(){
    this.route.navigateByUrl('/');
  }

}

