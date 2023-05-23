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

    // static function 記憶體是共用的,
    // 因此內部不能呼叫this,
    // static內的資料都會來自外部
    static MakePeople(text:string){
      return text + "這是加工的內容"
    }
  }
  const people1 = new People('jim');
  const peopleName = people1.getName();
  const makeRes = People.MakePeople(peopleName);
  console.log(peopleName);
  console.log(makeRes);
  console.log(new Blob([people1 as any]).size);
}
