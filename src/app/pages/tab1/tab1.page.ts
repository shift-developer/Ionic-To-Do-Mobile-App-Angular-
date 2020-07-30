import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController ) {
    
  }

  async agregarLista() {

    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Crear',
          handler: ( data ) => {
            if (data.titulo.lenght === 0) {
              return;
            }

            const listaId = this.deseosService.crearLista( data.titulo );

            this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);

          }
        }
      ]
    });

    alert.present();


  }


}
