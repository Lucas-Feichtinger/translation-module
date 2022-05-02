import { Injectable } from '@angular/core'
import { LanguageWebservice } from '../webservices/get-language/language.webservice'
import { Services } from '../services/services'
import { ResultModel, ErrorModel, LanguageInfoModel, GlobalAppModel, TranslationModel } from '../models'

@Injectable()

export class TranslateController {
	private Translation: TranslationModel
	private localTranslation: any = {
		"OBJECT": "key"
	}
	// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
	constructor(private languageWeb: LanguageWebservice) {
		this.Translation = new TranslationModel()
		this.Translation.Data = this.localTranslation
	}
	// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
	public setTranslation(translation: TranslationModel) {
		this.Translation = translation
	}
	// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
	public Translate(
		messageKey: string | ResultModel,
		variables?: { [key: string]: any }
	) {
		var key = ""
		if (messageKey instanceof ResultModel) {
			key = messageKey.Error
			variables = messageKey.ErrorVars
		} else {
			key = messageKey
		}
		var tlObj = this.TranslateObject(this.Translation.Data, key)
		if (!tlObj) {
			tlObj = this.TranslateObject(this.localTranslation, key)
		}
		if (!tlObj) return "Missing: " + key

		if (variables) {
			for (var key of Object.keys(variables)) {
				tlObj = tlObj.split('{' + key + '}').join(variables[key])
			}
		}

		return tlObj
	}
	// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
	private TranslateObject(obj: Object, key: string) {
		return obj[key]
	}
}
