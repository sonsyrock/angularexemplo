import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'; //Este import é uma propriedade de entrada e fornece metadados de configuração. Está vinculado a uma propriedade DOM. 
import { Output, EventEmitter } from '@angular/core';//Este import serve para emitir eventos personalizados

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})


export class ProductAlertsComponent implements OnInit {

  @Input() product;//Não entendi bem, mas acho que aqui, ele está herdando a propriedade do pai do componente
  @Output() notify = new EventEmitter();//Aqui, o output é um evento que vai emitir um alerta quando o valor da propriedade de notificação é alterado
  constructor() { }

  ngOnInit() {
  }

}