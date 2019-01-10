describe('Statement', function() {
  it('prints bill', function() {
    var invoices_json = JSON.parse("invoices.json");
    var plays_json = JSON.parse("plays.json");
    bill = statement(invoices_json, plays_json);
    expect(bill).equal("");
  });
});
