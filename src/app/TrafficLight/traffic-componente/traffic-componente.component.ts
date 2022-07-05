import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-componente',
  templateUrl: './traffic-componente.component.html',
  styleUrls: ['./traffic-componente.component.css']
})
export class TrafficComponenteComponent implements OnInit {

  colors: string[]=[]
  eleccionColors: string = ''

  constructor() { }

  ngOnInit(): void {
  }

//aqui traemos los eventtos que de realizan en el control 
  getColors(event:string[]){
    this.colors=event
    console.log(event);
    console.log(this.colors);
    
    
  }
//aqui vamos seleccionando el color 
  getSelectColors(event:string){
    this.eleccionColors = event
    console.log(event);
    console.log(this.eleccionColors);
    
    
  }

}
