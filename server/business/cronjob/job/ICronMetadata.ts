import {ISearchKeyword} from "@business/search/SearchKeyword"
import {getProvider} from "@business/search/provider/ProviderTypes"
import {CronJob} from "cron"

export interface ICronMetadata {
  readonly cronRule: string
  readonly key: string
  readonly action: () => Promise<any>
}

export class SearchCronMetadata implements ICronMetadata {
  readonly action: () => Promise<any>
  readonly cronRule: string
  readonly key: string


  constructor(search: ISearchKeyword) {
    this.action = () => getProvider(search.provider).processSearch(search)
    this.cronRule = search.cronRule
    this.key = search.key
  }
}