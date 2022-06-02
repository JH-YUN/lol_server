import { Injectable } from '@nestjs/common';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { ChampionDetail } from './entities/champion-detail.entity';

@Injectable()
export class ChampionsService {
  private db;
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const serviceAccount = require('../../key/firebase-key.json');

    initializeApp({
      credential: cert(serviceAccount),
    });
    this.db = getFirestore();
  }
  create(createChampionDto: CreateChampionDto) {
    return 'This action adds a new champion';
  }

  findAll() {
    return `This action returns all champions`;
  }

  async findOne(id: string) {
    const championRef = this.db.collection('champions').doc(id);
    const doc = await championRef.get();
    if (!doc.exists) {
      console.log('No such document!');
    }

    return doc.data();
  }

  update(id: number, updateChampionDto: UpdateChampionDto) {
    return `This action updates a #${id} champion`;
  }

  remove(id: number) {
    return `This action removes a #${id} champion`;
  }
}
