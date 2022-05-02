import { EnsureJSON } from './serializeable'

export class TranslationModel {
	public LangId: string = ''
	public LangVersion: number = 0
	public Language: string = ''
	public Data: object = null

	public static serialize(model: TranslationModel): Object {
		let obj = {}
		obj['langId'] = model.LangId
		obj['langVersion'] = model.LangVersion
		obj['language'] = model.Language
		obj['data'] = model.Data
		return obj
	}

	// List
	public static serializeList(modelList: TranslationModel[]): Array<Object> {
		let list: Array<Object> = []
		if (modelList && Array.isArray(modelList)) {
			for (let model of modelList) {
				list.push(TranslationModel.serialize(model))
			}
		}
		return list
	}

	// Obj
	public static deSerialize(obj: Object): TranslationModel {
		if(!obj) return new TranslationModel()
		obj = EnsureJSON(obj)
		let model = new TranslationModel()

		model.LangId = obj['langId']
		model.LangVersion = obj['langVersion']
		model.Language = obj['language']
	 	model.Data = obj['data']
		return model
	}

	// List
	public static deSerializeList(objList: Array<Object>): TranslationModel[] {
		let list: Array<TranslationModel> = []
		if (objList && Array.isArray(objList)) {
			for (let obj of objList) {
				list.push(TranslationModel.deSerialize(obj))
			}
		}
		return list
	}
}
