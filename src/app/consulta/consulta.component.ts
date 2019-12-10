import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public pessoas : Pessoa[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.obterPessoa().subscribe((data) => {
      //this.pessoas = map(pairs(Pessoa);
        
    });

  }

  public obterPessoa() {

    return this.httpClient.get<Pessoa>("http://localhost:57204/api/pessoa");
    
  }

}
