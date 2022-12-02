{
  // 物件寫法
  const old = {
    name: 'jim1',
  };

  class Test {
    public name;
    constructor(name: string) {
      this.name = name;
    }
  }

  // 最基礎的Class寫法,new 可以理解程分配新的記憶體,
  // 這樣就能讓數據不會互相影響
  const test1 = new Test('jim1');
  const test2 = new Test('jim2');
  console.log('test1:', test1.name);
  console.log('test2:', test2.name);
  test1.name = 'Andy123';
  console.log('test1:', test1.name);
  console.log('test2:', test2.name);
}
