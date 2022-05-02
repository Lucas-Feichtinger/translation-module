import { NgModule } from '@angular/core'
import { TranslationPipe } from './translate.pipe'

@NgModule({
	declarations: [TranslationPipe],
	exports: [TranslationPipe]
})

export class PipesModule { }
