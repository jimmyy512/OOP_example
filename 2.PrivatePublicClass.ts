{
  class People {
    private _name: string;
    constructor(name: string) {
      this._name = name;
    }

    // 針對商業邏輯去做封裝 getName 這個動作
    public getName() {
      return '這各是 Andy 要的邏輯' + this._name;
    }
  }
  const people = new People('jim');
  console.log(people.getName());
}
