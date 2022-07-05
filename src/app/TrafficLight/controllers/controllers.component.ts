import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styles:[`
  button{
    background-color: gray;
    color: white;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    margin: 90px 40px;
    cursor: pointer;
  }

  .desplegable {
    display: inline-block;
	  width: 25%;
	  cursor: pointer;
  	padding: 7px 10px;
  	height: 42px;
  	outline: 0; 
  	border: 0;
	  border-radius: 0;
	  background: #f0f0f0;
	  color: #7b7b7b;
	  font-size: 1em;
	  color: #999;
	  font-family: 'Quicksand', sans-serif;
	  border:2px solid rgba(0,0,0,0.2);
    border-radius: 12px;
    transition: all 0.25s ease;
    
    
  }
  h3, #bte{
    text-align: center;
    display: flex;
  justify-content: center;
  }
  `]
})
export class ControllersComponent implements OnInit {

  btn: boolean = false;

  colorEleccion: string = 'rojo';

  @Output() arraysColors: EventEmitter<string[]> = new EventEmitter();

  @Output() selecionColors: EventEmitter<string> = new EventEmitter();

  colores: string[]=['red','amber','green']

  constructor() { }

  ngOnInit(): void {
    this.arraysColors.emit(this.colores)

  }


  changeColor(){
    if(this.btn===false){
      this.btn = true     
      this.colorEleccion = this.colorEleccion;
    


    } else{
      this.btn = false
      this.colorEleccion = 'off'
    }

    this.selecionColors.emit(this.colorEleccion)

    console.log(this.colorEleccion);
    
  }
  

  sendColors(){
    console.log("emite colors" + this.colorEleccion);
    this.selecionColors.emit(this.colorEleccion)

    console.log(this.colorEleccion);
    
    
  }
}
