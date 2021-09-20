const path = require("path");

module.exports = {
  dependency: {
    platforms: {
      ios: {
        podspecPath: path.join(__dirname, "react-native-payments.podspec"),
      },
      android: {
        packageImportPath:
          "import com.reactnativepayments.ReactNativePaymentsPackage;",
        packageInstance: "new ReactNativePaymentsPackage()",
      },
    },
  },
};
