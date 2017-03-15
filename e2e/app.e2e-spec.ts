import { RabbitMQPage } from './app.po';

describe('rabbit-mq App', () => {
  let page: RabbitMQPage;

  beforeEach(() => {
    page = new RabbitMQPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
