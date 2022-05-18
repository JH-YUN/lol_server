import { ItemDetail } from './item-detail.entity';
import { RuneDetail } from './rune-detail.entity';
import { SkillDetail } from './skill-detail.entity';
export class ChampionDetail {
  item: ItemDetail;
  rune: RuneDetail[];
  skill: SkillDetail;
  spell: string[];
}
