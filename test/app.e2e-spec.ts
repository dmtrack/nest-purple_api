import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/app/create (POST) - success', async () => {
    const res = await request(app.getHttpServer())
      .post('/app/create')
      .send({ num: 1 });
    expect(res.body.num).toBe(1);
    expect(res.body.num).toBeGreaterThan(0);
    expect(res.statusCode).toBe(201);
  });

  it('/app/create (POST) - fail', async () => {
    const res = await request(app.getHttpServer())
      .post('/app/create')
      .send({ num: 0 });
    expect(res.statusCode).toBe(400);
  });
});
