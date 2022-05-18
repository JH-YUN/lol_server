import { ChampionDetail } from './champion-detail.entity';

export class Champion {
  id: string;
  version: string;
  position: string[];
  TOP?: ChampionDetail;
  JUNGLE?: ChampionDetail;
  MID?: ChampionDetail;
  ADC?: ChampionDetail;
  SUPPORT?: ChampionDetail;
}
