import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [StartComponent,SlidesComponent,LogoComponent],
  imports: [StartComponent,SlidesComponent,LogoComponent,
    CommonModule,CommonModule, FormsModule, IonicModule
  ]
})
export class ComponentsModule { }
