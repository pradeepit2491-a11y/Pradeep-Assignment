function runTest()
{
    switch (testType) {
        case ("smoke"):
        console.log("TestType for the run test is Smoke Testing")
        break;
        case ("sanity"):
        console.log("TestType for the run test is sanity Testing")
        break;
        case ("regression"):
        console.log("TestType for the run test is regression Testing")
        break;
        default:
        console.log("TestType for the run test is other than Smoke Testing")
        break;
    }
}
let testType="eegresion"
runTest()