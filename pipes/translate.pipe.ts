import { Pipe, PipeTransform } from '@angular/core'
import { TranslateController } from '../controllers'

@Pipe({
	name: 'translate',
	pure: false
})

export class TranslationPipe implements PipeTransform {
	constructor(private translate: TranslateController) { }

	transform(id: string): string {
		return this.translate.Translate(id)
	}
}
