function getTestData() {
  return {
    code: 200,
    data: {
      message: 'mock test data ok'
    }
  }
}
function reportData() {
  return {
    code: 200,
    data: {
      message: 'report data ok'
    }
  }
}

export default {
  getTestData,
  reportData
}
