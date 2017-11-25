import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';

import { TranslateService } from '@ngx-translate/core';



export interface Slide {
  title: string;
  description: string;
  image?: string;
  example?:string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService) {
    translate.get([
      "TUTORIAL_SLIDE0_TITLE",
      "TUTORIAL_SLIDE0_DESCRIPTION",
      "TUTORIAL_SLIDE02_TITLE",
      "TUTORIAL_SLIDE02_DESCRIPTION",
      "TUTORIAL_SLIDE03_TITLE",
      "TUTORIAL_SLIDE03_DESCRIPTION",
      "TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE11_TITLE",
      "TUTORIAL_SLIDE11_DESCRIPTION",
      "TUTORIAL_SLIDE111_TITLE",
      "TUTORIAL_SLIDE111_DESCRIPTION",
      "TUTORIAL_SLIDE12_TITLE",
      "TUTORIAL_SLIDE12_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
      "TUTORIAL_SLIDE3_EXAMPLE",
      "TUTORIAL_SLIDE3b_TITLE",
      "TUTORIAL_SLIDE3b_DESCRIPTION",
      "TUTORIAL_SLIDE3b_EXAMPLE",
      "TUTORIAL_SLIDE4_TITLE",
      "TUTORIAL_SLIDE4_DESCRIPTION",
      "TUTORIAL_SLIDE4_EXAMPLE",
      "TUTORIAL_SLIDE5_TITLE",
      "TUTORIAL_SLIDE5_DESCRIPTION",
      "TUTORIAL_SLIDE5_EXAMPLE",
      "TUTORIAL_SLIDE6_TITLE",
      "TUTORIAL_SLIDE6_DESCRIPTION",
      "TUTORIAL_SLIDE6_EXAMPLE",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: values.TUTORIAL_SLIDE0_TITLE,
            description: values.TUTORIAL_SLIDE0_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-0.png',
          },
          {
            title: values.TUTORIAL_SLIDE02_TITLE,
            description: values.TUTORIAL_SLIDE02_DESCRIPTION
          },
          {
            title: values.TUTORIAL_SLIDE03_TITLE,
            description: values.TUTORIAL_SLIDE03_DESCRIPTION,
          },
          {
            title: values.TUTORIAL_SLIDE1_TITLE,
            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
          },
          {
            title: values.TUTORIAL_SLIDE11_TITLE,
            description: values.TUTORIAL_SLIDE11_DESCRIPTION,
          },
          {
            title: values.TUTORIAL_SLIDE111_TITLE,
            description: values.TUTORIAL_SLIDE111_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-1.png',
          },
          {
            title: values.TUTORIAL_SLIDE12_TITLE,
            description: values.TUTORIAL_SLIDE12_DESCRIPTION
          },
          {
            title: values.TUTORIAL_SLIDE2_TITLE,
            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-2.png',
          },
          {
            title: values.TUTORIAL_SLIDE3_TITLE,
            description: values.TUTORIAL_SLIDE3_DESCRIPTION,
            example: values.TUTORIAL_SLIDE3_EXAMPLE,
          },
          {
            title: values.TUTORIAL_SLIDE3b_TITLE,
            description: values.TUTORIAL_SLIDE3b_DESCRIPTION,
            example: values.TUTORIAL_SLIDE3b_EXAMPLE,
          },
          {
            title: values.TUTORIAL_SLIDE4_TITLE,
            description: values.TUTORIAL_SLIDE4_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-4.png',
          },
          {
            title: values.TUTORIAL_SLIDE5_TITLE,
            description: values.TUTORIAL_SLIDE5_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-5.png',
          },
          {
            title: values.TUTORIAL_SLIDE6_TITLE,
            description: values.TUTORIAL_SLIDE6_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-6.png',
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot(WelcomePage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
