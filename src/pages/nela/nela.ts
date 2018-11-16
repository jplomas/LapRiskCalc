import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-nela',
  templateUrl: 'nela.html'
})
export class NELAPage {
todo = {}
logForm() {
  console.log(this.todo)
}

  constructor(public alerCtrl: AlertController) { }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'About this risk prediction model',
      message: 'NELA model, 2016: Eugene N, Kuryba A, Walker K. -- available <a href="#" onclick="window.open(\'http://www.nela.org.uk/download.php/?fn=NELA%20Technical%20Document%20-%20Development%20of%20the%20Risk%20Adjustment%20Model%20July%202016.pdf&mime=application/pdf&pureFn=NELA%20Technical%20Document%20-%20Development%20of%20the%20Risk%20Adjustment%20Model%20July%202016.pdf\', \'_system\', \'location=yes\'); return false;">at NELA website</a>',
      buttons: ['Ok']
    });
    alert.present()
  }
}
