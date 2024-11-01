import Text "mo:base/Text";

actor {
  stable var lastTranslation : Text = "";

  public query func storeTranslation(translation : Text) : async () {
    lastTranslation := translation;
  };

  public query func getTranslation() : async Text {
    return lastTranslation;
  };
}
