import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { angularMath } from 'angular-ts-math';

@Component({
  selector: 'app-front-end-ex',
  templateUrl: './front-end-ex.component.html',
  styleUrls: ['./front-end-ex.component.scss']
})
export class FrontEndExComponent implements OnInit {

  relatorioForm: FormGroup = new FormGroup({
    nomeAluno: new FormControl('', [Validators.required]),
    p1: new FormControl('', [Validators.required]),
    p2: new FormControl('', [Validators.required]),
    p3: new FormControl('', [Validators.required]),
  })

  nome: string
  pessoas: Array<any>
  prova1: number
  prova2: number
  prova3: number
  res: number
  aux: number
  aux2: number
  falta: number
  notaBaixa: boolean

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.pessoas = new Array<any>();
  }

  popular(f: NgForm){
    this.nome = f.form.controls.nome.value
    this.prova1 = f.form.controls.p1.value
    this.prova2 = f.form.controls.p2.value
  }

  calcMedia(f: NgForm) {
    
    this.popular(f);
    
    let limite = 6.2;
    let x: number;

    // Lógica para encontrar a nota que falta

    // p1 = 8.2
    // p2 = 6.7
    // p3 = ??

    // 6.2 = p1 * 0.25 + p2 * 0.25 + p3 * 0.5 / 0.5 + 0.25 + 0.25
    // 6.2 = 2.05 + 1.68 + (p3 * 0.5) / 1
    // 6.2 * 1 = (p3 * 0.5)
    // 6.2 - 2.05 - 1.68 = p3 * 0.5
    // 2.47 = p3 * 0.5
    // 2.47 / 0.5 = p3
    // p3 = 4.94

    x = ((limite - (this.prova1 * 0.25) - (this.prova2 * 0.25)) / 0.5)

    this.falta = parseFloat(x.toFixed(2));

    if(this.falta > 10){
      this.notaBaixa = true;
    } else {
      this.notaBaixa = false;
    }

  }

  form_submit(f: NgForm) {

    this.popular(f);
    this.prova3 = f.form.controls.p3.value

    this.aux = (this.prova1 * 0.25) + (this.prova2 * 0.25) + (this.prova3 * 0.5)
    this.res = this.aux/1



    this.pessoas.push({
      nome: this.nome,
      p1: this.prova1,
      p2: this.prova2,
      p3: this.prova3,
      res: this.res.toFixed(2)
    });

    (<HTMLInputElement>document.getElementById("nome")).value = '';
    (<HTMLInputElement>document.getElementById("p1")).value = '';
    (<HTMLInputElement>document.getElementById("p2")).value = '';
    (<HTMLInputElement>document.getElementById("p3")).value = '';
  }

  goBack() {
    this.route.navigateByUrl('/');
  }

  clean() {
    this.pessoas = [];
  }

  delete(i: string) {
    i = this.nome
    this.pessoas.splice(this.pessoas.indexOf('i'), 1);
  }


}
