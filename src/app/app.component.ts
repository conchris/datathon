import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gaston';
  active: number = 0;

  ascenceur = [
    { name: 'Oui', code: true },
    { name: 'Non', code: false }
  ]
  terrasse_balcon = [
    { name: 'Oui', code: true },
    { name: 'Non', code: false }
  ]
  
  stationnement = [
    { name: 'Garage', code: 'garage' },
    { name: 'Parking', code: 'parking' }
  ]
  
  niveau_de_demande = [
    { name: 'Faible', code: 'faible' },
    { name: 'Moyenne', code: 'moyenne' },
    { name: 'Forte', code: 'forte' }
  ]
  
  cible = [
    { name: 'Famille', code: 'famille' },
    { name: 'Etudiant', code: 'etudiant' },
    { name: 'Expatriés', code: 'expatries' },
    { name: 'Autres', code: 'etc' }
  ]

  steppers = [
    {
      label: 'Information sur le Bien',
      command : (event: any) => this.active = 0,
      // routerLink: 'info'
    },
    {
      label: 'État du Bien',
      command : (event: any) => this.active = 1,
      // routerLink: 'etat'
    },
    {
      label: 'Valorisation à la vente',
      command : (event: any) => this.active = 2,
      // routerLink: 'valorisation'
    },
    {
      label: 'Estimation Locative',
      command : (event: any) => this.active = 3,
      // routerLink: 'estimation'
    },
    {
      label: 'Marché Locatif Local',
      command : (event: any) => this.active = 4,
      // routerLink: 'marchet'
    }
  ]


  buttonStepper = (type: string) => {

    if(type === "next"){
      this.active += 1
    }else{
      this.active -= 1
    }
  }

  constructor(
    private http: HttpClient
  ){

  }
  ngOnInit(){

    this.http.get("https://app.dvf.etalab.gouv.fr/api")
    .subscribe((res: any)=>{
      console.log(res);
      
    })

  }

}
