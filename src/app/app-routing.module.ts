import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchImageComponent } from './match-image/match-image.component';
import { MatchImageTextComponent } from './match-image-text/match-image-text.component';

const routes: Routes = [
  { path: 'matchImage', component: MatchImageComponent },
  { path: 'matchImageText', component: MatchImageTextComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
