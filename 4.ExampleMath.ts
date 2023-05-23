{
  class MyMath {
    private _num1: number;
    private _num2: number;
    constructor(num1: number,num2: number) {
      this._num1 = num1;
      this._num2 = num2;
    }
    public setNum1(value:number){
      this._num1 = value;
    }
    public setNum2(value:number){
      this._num2 = value;
    }
    public Add(){
      return this._num1 + this._num2;
    }
    public Sub(){
      return this._num1 - this._num2;
    }
  }
  const myMath = new MyMath(10,50);
  console.log(myMath.Add());
  myMath.setNum1(100);
  console.log(myMath.Add());
  myMath.setNum1(100);
  myMath.setNum2(200);
  console.log(myMath.Add());
}
