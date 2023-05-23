{
  // 如何把API 設計的跟tween一樣?
  // https://github.com/tweenjs/tween.js/
  class People {
    private _age = 0;
    public GrowOneAge() {
      this._age += 1;
      return this;
    }
    public GrowTenAge() {
      this._age += 10;
      return this;
    }
    public GetCurrentAge() {
      return this._age;
    }
  }
  const jim = new People();
  const jimAge = jim.GetCurrentAge();
  console.log('jim nowAge:', jimAge);

  const alan = new People();
  const alanAge = alan
    .GrowTenAge()
    .GrowTenAge()
    .GrowOneAge()
    .GrowOneAge()
    .GrowOneAge()
    .GetCurrentAge();
  console.log('alan nowAge:', alanAge);
}
