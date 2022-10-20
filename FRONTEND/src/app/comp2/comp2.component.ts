import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }
  @Input() prenom : String = ""; 
  @Input() nom : String = ""; 
  @Input() civilite : String = ""; 
  @Input() adresse : String = ""; 
  @Input() code_postal : String = ""; 
  @Input() ville : String = ""; 
  @Input() telephone : String = ""; 
  @Input() email : String = ""; 
  @Input() login : String = ""; 
  @Output() change: EventEmitter<String> = new EventEmitter<String>();

  

  bonjour: String= "";
  recap_adresse: String= "";
  recap_telephone: String= "";


  ngOnInit(): void {
  }

  clic () {
    this.change.emit( 'Bonjour ' + this.prenom + ' ' + this.nom + ' alias ' + this.login + '. Votre addresse : ' + this.adresse + ' ' + this.code_postal
    + ' ' + this.ville + ". Email : " + this.email + '. Telephone : ' + this.telephone);
  }

}
