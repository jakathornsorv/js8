const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 }
  ]
  
  const getPassingNames = (score) => {
    const pass = score.filter(student => student.score > 80).map(student => student.name)
    return pass
  }
  const passingNames = getPassingNames(studentScores)
  console.log(passingNames)