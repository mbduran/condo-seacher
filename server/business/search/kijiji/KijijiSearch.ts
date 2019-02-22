import {ISearchKeyword, SearchKeyword} from "@business/search/SearchKeyword"
import {IProvider} from "@business/search/provider/IProvider"
import {getProvider, ProviderType} from "@business/search/provider/ProviderTypes"
import {Editable} from "@business/model/decorator/Editable"
import {ISearchService} from "@services/searches/SearchService"
import {Injection, Services} from "@inject"

export interface IKijijiSearch extends ISearchKeyword {
  locationId: number
  categoryId: number
}

export class KijijiSearch extends SearchKeyword implements IKijijiSearch {
  @Editable()
  locationId: number
  @Editable()
  categoryId: number


  get provider(): IProvider<ISearchKeyword> {
    return getProvider(ProviderType.KIJIJI)
  }

  get service(): ISearchService {
    return Injection.service(Services.SearchKijiji)
  }
}